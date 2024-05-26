import { AdultEmployee } from "./employees/AdultEmployee";
import { TeenagerEmployee } from "./employees/TeenagerEmployee";
import { YoungEmployee } from "./employees/YoungEmployee";
import { Employee } from "./Employee";

export class EmployeeFactory {
  createEmployee({ name, age }: Employee): Employee {
    let employee: Employee;
    if (age >= 18) {
      employee = new AdultEmployee(age, name);
    } else if (age >= 16) {
      employee = new YoungEmployee(age, name);
    } else {
      employee = new TeenagerEmployee(age, name);
    }

    return employee;
  }
}