import { ChangeEvent, FC } from 'react';
import styles from './app-text-input.module.css';

interface AppTextInutProps {
  value: string | undefined;
  label: string;
  onChange: (value: string) => void;
}

export const AppTextInput: FC<AppTextInutProps> = ({ value, label, onChange }) => {

  const onChangeInner = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputId = `app-text-input-${label}`;

  return (
    <div className={styles['app-text-input']}>
      <label htmlFor={inputId}>{label}</label>
      <input
        type="text"
        id={inputId}
        value={value ?? ''}
        onChange={onChangeInner}
      />
    </div>
  );
};
