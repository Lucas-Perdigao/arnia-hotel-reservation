import { IReservationRepository } from "../repositories/reservation-repository-interface"
import { fakeReservation } from "./fake-reservation"
import { fakeReservationArray } from "./fake-reservation-array"

export const fakeReservationRepository = {
    getAll(){ return Promise.resolve(fakeReservationArray)}, //array de reservas
    getById(){ return Promise.resolve(fakeReservation)}, //demais, uma reserva
    create(){ return Promise.resolve(fakeReservation)},
    update(){ return Promise.resolve(fakeReservation) },
    softDelete(){ return Promise.resolve(fakeReservation)}
} as unknown as IReservationRepository

// fakeReservationRepository.getAll() //VAI RETORNAR PROMISE E FIM DE PAPO
// await fakeReservationRepository.getAll() //aí sim retorna o resultado da promessa (rejeitada ou resolvida)