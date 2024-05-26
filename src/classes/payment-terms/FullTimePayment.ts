import { PaymentTerm } from "../PaymentTerm";
import { defaultRate } from "../../constants/default-rate";

export class FullTimePayment implements PaymentTerm {

  workingHours = 40;

  getWeekSalary() {
    const monthSalary = this.workingHours * defaultRate;
    return monthSalary;
  }

}