import { PaymentTerm } from "./PaymentTerm";

export class Employee {
  age: number;
  name: string;
  private paymentTerm: PaymentTerm;

  constructor(age: number, name: string, paymentTerm: PaymentTerm) {
    this.age = age;
    this.name = name;
    this.paymentTerm = paymentTerm;
  }

  getMonthSalary() {
    const weekSalary = this.paymentTerm.getWeekSalary();
    const monthSalary = weekSalary * 4;
    return monthSalary;
  }
}