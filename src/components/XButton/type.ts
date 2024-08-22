import { MouseEventHandler } from 'react';

export interface IXButtonProps {
  color: 'outline-white' | 'outline' | 'black' | 'white';
  type?: 'submit' | 'button' | 'reset';
  onClick?: MouseEventHandler;
  className?: string;
  disabled?: boolean;
  visible?: boolean;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
  loader?: boolean;
}
