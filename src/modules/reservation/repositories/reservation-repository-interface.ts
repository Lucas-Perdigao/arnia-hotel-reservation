import { Reservation } from "../model/reservation-model";
import { CreateReservationDTO } from "../dtos/create-reservation-dto";
import { UpdateReservationDTO } from "../dtos/update-reservation-dto";

export interface IReservationRepository {
    getAll(): Promise<Array<Reservation>>

    getById(id: string): Promise<Reservation | null>

    create(reservationData: CreateReservationDTO): Promise<Reservation | null>

    update(id: string, newReservationData: UpdateReservationDTO): Promise<Reservation | null>

    softDelete(id: string): Promise<Reservation | null>
}