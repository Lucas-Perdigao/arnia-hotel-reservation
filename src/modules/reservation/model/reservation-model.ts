import { InferSchemaType, Schema, Model, model, Types } from "mongoose";

const reservationSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  hotel: {
    type: Types.ObjectId,
    required: true,
    ref: 'Hotel'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'unavailable', 'cancelled']
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
})

export type Reservation = InferSchemaType<typeof reservationSchema>

export const ReservationModel: Model<Reservation> = model('Reservation', reservationSchema)
