export interface PaymentTerm {
  workingHours: number;
  getWeekSalary: () => number;
}