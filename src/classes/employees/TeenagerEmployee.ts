import { Employee } from "../Employee";
import { TheShortestWeekPayment } from "../payment-terms/TheShortestWeekPayment";

export class TeenagerEmployee extends Employee {

  constructor(age: number, name: string) {
    const paymentTerm = new TheShortestWeekPayment();
    super(age, name, paymentTerm);
  }

}