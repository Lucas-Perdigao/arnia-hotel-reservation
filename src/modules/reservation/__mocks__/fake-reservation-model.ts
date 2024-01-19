import { Model } from "mongoose";
import { Reservation } from "../model/reservation-model";
import { fakeReservation } from "./fake-reservation";
import { fakeReservationArray } from "./fake-reservation-array";

export const fakeReservationModel = {
  find:  jest.fn().mockImplementation(() => fakeReservationArray),
  findOne:  jest.fn().mockImplementation(() => fakeReservation),
  create: jest.fn().mockImplementation(() => fakeReservation),
  findByIdAndUpdate: jest.fn().mockImplementation(() => fakeReservation)
} as unknown as Model<Reservation>