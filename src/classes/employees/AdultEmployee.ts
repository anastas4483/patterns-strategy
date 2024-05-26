import { Employee } from "../Employee";
import { FullTimePayment } from "../payment-terms/FullTimePayment";

export class AdultEmployee extends Employee {

  constructor(age: number, name: string) {
    const paymentTerm = new FullTimePayment();
    super(age, name, paymentTerm);
  }

}