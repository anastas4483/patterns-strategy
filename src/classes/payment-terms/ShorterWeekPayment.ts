import { PaymentTerm } from "../PaymentTerm";
import { defaultRate } from "../../constants/default-rate";

export class ShorterWeekPayment implements PaymentTerm {

  workingHours = 36;

  getWeekSalary() {
    const monthSalary = this.workingHours * defaultRate;
    return monthSalary;
  }

}