import { CreateReservationDTO } from "../dtos/create-reservation-dto";
import { UpdateReservationDTO } from "../dtos/update-reservation-dto";
import { Reservation } from "../model/reservation-model";
import { IReservationRepository } from "../repositories/reservation-repository-interface"
import { IReservationService } from "./reservation-service-interface";
import bcrypt from 'bcrypt'

export class ReservationService implements IReservationService{
    constructor(private reservationRepository: IReservationRepository){}

    async getAll(): Promise<Reservation[]>{
        const reservations = await this.reservationRepository.getAll()
        
        if(!reservations || reservations.length ===0){
            throw new Error('Reservations not found.')
        }

        return reservations
    }

    async getById(id: string): Promise<Reservation>{
        const reservation = await this.reservationRepository.getById(id)

        if(!reservation){
            throw new Error('Reservation not found.')
        }

        return reservation
    }
    
    async create(reservationData: CreateReservationDTO): Promise<Reservation>{
        const newReservation = await this.reservationRepository.create(reservationData)

        if(!newReservation){
            throw new Error('Cannot create reservation.')
        }

        return newReservation
    }

    async update(id: string, newReservationData: UpdateReservationDTO): Promise<Reservation>{
        const reservation = await this.reservationRepository.getById(id)

        if(!reservation){
            throw new Error('Reservation not found.')
        }

        const updatedReservation = await this.reservationRepository.update(id, newReservationData)

        if(!updatedReservation){
            throw new Error('Cannot update reservation.')
        }

        return reservation
    }

    async softDelete(id: string): Promise<Reservation>{
        const reservation = await this.reservationRepository.getById(id)

        if(!reservation){
            throw new Error("Reservation not found.")
        }

        const deletedReservation = await this.reservationRepository.softDelete(id)

        if(!deletedReservation){
            throw new Error("Cannot delete reservation.")
        }

        return deletedReservation
    }
}
