import { FC, useCallback } from 'react';
import { Employee } from '../../classes/Employee';
import { AppButton } from '../common/app-button/AppButton';
import { AppNumberInput } from '../common/app-number-input/AppNumberInput';
import { AppTextInput } from '../common/app-text-input/AppTextInput';
import styles from './registration-form.module.css';

interface RegistrationFormProps {
  employee: Partial<Employee>;
  hint: string;
  onChangeField: (fieldName: keyof Employee) => (value: Employee[keyof Employee]) => void;
  onRegistrationClick: () => void;
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ employee, hint, onChangeField, onRegistrationClick }) => {

  const onChangeName = useCallback(onChangeField('name'), []);
  const onChangeAge = useCallback(onChangeField('age'), []);

  return (
    <div className={styles['registration-form']}>
      <h2>Зарегистрируйтесь для поиска работы</h2>
      <div>
        <AppTextInput
          value={employee.name}
          label="Имя"
          onChange={onChangeName}
        />
        <AppNumberInput
          value={employee.age}
          label="Возраст"
          onChange={onChangeAge}
        />
      </div>
      <AppButton
        label="Регистрация"
        onClick={onRegistrationClick}
      />
      {hint && <div className={styles.hint}>{hint}</div>}
    </div>
  );
};
