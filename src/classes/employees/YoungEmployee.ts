import { Employee } from "../Employee";
import { ShorterWeekPayment } from "../payment-terms/ShorterWeekPayment";

export class YoungEmployee extends Employee {

  constructor(age: number, name: string) {
    const paymentTerm = new ShorterWeekPayment();
    super(age, name, paymentTerm);
  }

}