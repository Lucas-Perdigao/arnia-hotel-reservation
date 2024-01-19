import { Model, isValidObjectId } from "mongoose";
import { Reservation } from "../model/reservation-model";
import { CreateReservationDTO } from "../dtos/create-reservation-dto";
import { UpdateReservationDTO } from "../dtos/update-reservation-dto";
import { IReservationRepository } from "./reservation-repository-interface";

export class ReservationRepository implements IReservationRepository {
    constructor(private reservationModel: Model<Reservation>){}

    async getAll(): Promise<Reservation[]>{
        const reservations = await this.reservationModel.find({deletedAt: null}).populate('reservations')
        return reservations
    }

    async getById(id: string): Promise<Reservation | null>{
        const reservation = await this.reservationModel.findOne({_id: id, deletedAt: null})
        return reservation
    }

    async create(reservationData: CreateReservationDTO): Promise<Reservation | null>{
        const newReservation = await this.reservationModel.create(reservationData)
        return newReservation
    }

    async update(id: string, newReservationData: UpdateReservationDTO): Promise<Reservation | null>{
        if(!isValidObjectId(id)){
            throw new Error(`Id ${id} is not valid.`)
        }

        const updatedReservation = await this.reservationModel.findByIdAndUpdate(id, newReservationData, { new: true })
        return updatedReservation
    }

    async softDelete(id: string): Promise<Reservation | null>{
        if(!isValidObjectId(id)){
            throw new Error(`Id ${id} is not valid.`)
        }

        const deletedReservation = await this.reservationModel.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true })
        return deletedReservation
    }
}   
