export class CreateReservationDTO {
  user: string
  hotel: string
  startDate: Date
  endDate: Date
  status: string

  constructor(reservationData: CreateReservation){
      this.user = reservationData.user
      this.hotel = reservationData.hotel
      this.startDate = reservationData.startDate
      this.endDate = reservationData.endDate
      this.status = reservationData.status
  }
}

type CreateReservation = {
  user: string,
  hotel: string,
  startDate: Date,
  endDate: Date,
  status: string
}

//DTO

//Data
//Transfer
//Object

//Objeto de transferência de dados