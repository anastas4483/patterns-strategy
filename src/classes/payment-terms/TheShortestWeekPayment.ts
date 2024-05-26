import { PaymentTerm } from "../PaymentTerm";
import { defaultRate } from "../../constants/default-rate";

export class TheShortestWeekPayment implements PaymentTerm {

  workingHours = 24;

  getWeekSalary() {
    const monthSalary = this.workingHours * defaultRate;
    return monthSalary;
  }

}