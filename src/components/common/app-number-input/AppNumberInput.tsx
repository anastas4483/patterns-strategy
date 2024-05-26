import { ChangeEvent, FC } from 'react';
import styles from './app-number-input.module.css';

interface AppNumberInutProps {
  value: number | undefined;
  label: string;
  onChange: (value: number) => void;
}

export const AppNumberInput: FC<AppNumberInutProps> = ({ value, label, onChange }) => {

  const onChangeInner = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const inputId = `app-text-input-${label}`;

  return (
    <div className={styles['app-text-input']}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="number"
        id={inputId}
        value={value}
        onChange={onChangeInner}
      />
    </div>
  );
};
