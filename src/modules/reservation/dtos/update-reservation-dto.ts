export class UpdateReservationDTO {
  user?: string
  hotel?: string
  startDate?: Date
  endDate?: Date
  status?: string

  constructor(reservationData: UpdateReservation){
      this.user = reservationData?.user
      this.hotel = reservationData?.hotel
      this.startDate = reservationData?.startDate
      this.endDate = reservationData?.endDate
      this.status = reservationData?.status
  }
}

type UpdateReservation = {
  user?: string,
  hotel?: string,
  startDate?: Date,
  endDate?: Date,
  status?: string
}

//DTO

//Data
//Transfer
//Object

//Objeto de transferência de dados