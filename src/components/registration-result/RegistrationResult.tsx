import { FC } from 'react';
import { AppButton } from '../common/app-button/AppButton';
import styles from './registration-result.module.css';

interface RegistrationResultProps {
  salary: number;
  employeeName: string;
  onGoBackClick: () => void;
}

export const RegistrationResult: FC<RegistrationResultProps> = ({ salary, employeeName, onGoBackClick }) => (
  <div className={styles['registration-result']}>
    <h2>Поздравляем, {employeeName}! Вы успешно зарегистировались</h2>
    <div>После выхода на работу вы будете получать {salary} рублей в месяц</div>
    <AppButton
      label="Вернуться на главную"
      className={styles['go-back-button']}
      onClick={onGoBackClick}
    />
  </div>
);
