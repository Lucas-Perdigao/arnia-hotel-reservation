import { fakeReservationArray } from "../__mocks__/fake-reservation-array"
import { fakeReservationRepository } from "../__mocks__/fake-reservation-repository"
import { ReservationService } from "./reservation-service"

const reservationService = new ReservationService(fakeReservationRepository)


describe('ReservationService', () => {
  describe('getAll', () => {
    it('Should return an array of reservations', async () => {
      const reservations = await reservationService.getAll()
      expect(reservations).toEqual(fakeReservationArray)
    })

    it('Should return an error if no reservation is found', async () => {
      jest.spyOn(fakeReservationRepository, 'getAll').mockImplementationOnce(() => Promise.resolve([]))
      // jest.spyOn(fakeReservationRepository, 'getAll').mockResolvedValueOnce([])
      await expect(reservationService.getAll()).rejects.toThrow('Reservations not found.')

      jest.spyOn(fakeReservationRepository, 'getAll').
    })
  })
})


//Casos mais usados de spyOn:
//mockImplementation -> recebe uma função e muda todo o valor da função original pelo mock
//mockReturnValue -> recebe um único dado de maneira síncrona, como um return comum
//mockResolvedValue -> recebe um único dado de maneira ASSÍNCRONA, como um return de uma Promise de sucesso
//mockRejectedValue -> recebe um único daod de maneira ASSÍNCRONA, como um return de uma Promise de rejeição

//Lembrar que se acrescentar "Once" no método, o spyOn modifica a função UMA ÚNICA VEZ depois do que foi implantado.
//Caso contrário, se não usar o "Once", ele vai continuar pra sempre (ou até resetar o mock), o jeito que foi implantado.