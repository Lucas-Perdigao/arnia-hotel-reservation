import { fakeReservationArray } from "../__mocks__/fake-reservation-array"
import { fakeReservationModel } from "../__mocks__/fake-reservation-model"
import { ReservationRepository } from "./reservation-repository"

const reservationRepository = new ReservationRepository(fakeReservationModel)

describe('ReservationRepository', () => {
  describe('getAll', () => {
    it('Should return an array of reservations', async () => {
      const reservations = await reservationRepository.getAll()
      expect(reservations).toEqual(fakeReservationArray)
    })

    it('Should call the find method from the reservation model', async () => {
      await reservationRepository.getAll()
      expect(fakeReservationModel.find).toHaveBeenCalled()
    })

    it('Should call the find method from the reservation model with the query {deletedAt: null}', async () => {
      await reservationRepository.getAll()
      expect(fakeReservationModel.find).toHaveBeenCalledWith({deletedAt: null})
    })

    it('Should return a defined value', async () => {
      const reservations = await reservationRepository.getAll()
      expect(reservations).toBeDefined()
    })
  })
})