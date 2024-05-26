import { useMemo, useState } from 'react';
import { Employee } from '../../classes/Employee';
import { EmployeeFactory } from '../../classes/EmployeeFactory';
import { RegistrationForm } from '../../components/registration-form/RegistrationForm';
import { RegistrationResult } from '../../components/registration-result/RegistrationResult';
import styles from './labor-exchange-page.module.css';

export const LaborExchangePage = () => {

  const [employee, setEmployee] = useState<Partial<Employee>>({});
  const [salary, setSalary] = useState<number>();
  const [hint, setHint] = useState('');
  const [isShowResult, setIsShowResult] = useState(false);

  const onChangeEmployeeField = (fieldName: keyof Employee) =>
    (value: Employee[keyof Employee]) =>
      setEmployee(prev => ({ ...prev, [fieldName]: value }));

  const getMonthSalary = () => {
    const employeeFactory = new EmployeeFactory();
    const employeeWithPayment = employeeFactory.createEmployee(employee as Employee);
    return employeeWithPayment.getMonthSalary();
  };

  const isFormValid = useMemo(() => employee.age && employee.name, [employee]);

  const onRegistrationClick = () => {
    if (isFormValid) {
      const monthSalary = getMonthSalary();
      setSalary(monthSalary);
      setHint('');
      setIsShowResult(true);
      return;
    }
    setHint('Заполните все поля');
  };

  const onGoBackClick = () => {
    setEmployee({});
    setSalary(undefined);
    setIsShowResult(false);
  };

  return (
    <div className={styles['labor-exchange-page']}>
      {isShowResult ?
        <RegistrationResult
          salary={salary}
          employeeName={employee.name}
          onGoBackClick={onGoBackClick}
        />
        : <RegistrationForm
          employee={employee}
          hint={hint}
          onChangeField={onChangeEmployeeField}
          onRegistrationClick={onRegistrationClick}
        />
      }
    </div>
  );
};
