import { MouseEventHandler } from 'react';

export interface IXButtonProps {
  type?: undefined | 'submit' | 'button' | 'reset';
  onClick?: MouseEventHandler | undefined;
  className?: undefined | string;
  disabled?: undefined | boolean;
  visible?: undefined | boolean;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  color: 'black' | 'white';
  fullWidth?: boolean;
  loader?: boolean;
}
