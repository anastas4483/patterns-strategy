import { FC } from 'react';
import styles from './app-button.module.css';

interface AppButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

export const AppButton: FC<AppButtonProps> = ({ label, className, onClick }) => {
  return (
    <button
      className={`${styles['app-button']} ${className ?? ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
