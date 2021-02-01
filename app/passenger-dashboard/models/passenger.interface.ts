import { Baggage } from "./baggage.interface";

export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkedInDate?: number;
    baggage: Baggage[];
  }