import { CreateReservationDTO } from "../dtos/create-reservation-dto"
import { UpdateReservationDTO } from "../dtos/update-reservation-dto"
import { Reservation } from "../model/reservation-model"

export interface IReservationService {
    getAll(): Promise<Array<Reservation>>

    getById(id: string): Promise<Reservation>

    create(reservationData: CreateReservationDTO): Promise<Reservation>

    update(id: string, newReservationData: UpdateReservationDTO): Promise<Reservation>

    softDelete(id: string): Promise<Reservation>
}