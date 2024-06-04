import styles from './index.module.scss';
import cn from 'classnames';

import React, {
  HTMLInputTypeAttribute,
  ChangeEvent,
  useEffect,
  RefObject,
  useState
} from 'react';

interface IProps {
  type?: HTMLInputTypeAttribute | undefined;
  onChange?: (value: string) => void;
  ref?: RefObject<HTMLInputElement>;
  placeholder?: undefined | string;
  className?: undefined | string;
  icon?: React.ReactNode;
  errorMessage?: string;
  value?: string | null;
  isPassword?: boolean;
  readOnly?: boolean;
  visible?: boolean;
  label?: string;
  name?: string;
}

export const XInput: React.FC<IProps> = ({
  visible = true,
  errorMessage,
  placeholder,
  isPassword,
  className,
  onChange,
  readOnly,
  value,
  label,
  name,
  type,
  icon,
  ref
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isShowEye, setIsShowEye] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsError(!!errorMessage);
  }, [errorMessage]);

  const handleOnFocus = () => {
    setIsActive(true);
  };

  const handleOnBlur = () => {
    setIsActive(false);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange?.(value);
  };

  if (!visible) return null;

  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <label className={styles.label} x-attr="x-label">
          {icon} {label}
        </label>
      )}
      <div
        className={cn(styles.innerWrapper, {
          [styles.active]: isActive && !readOnly,
          [styles.readOnly]: readOnly,
          [styles.error]: isError
        })}
        x-attr="x-inner-wrapper">
        <input
          value={value === null ? '' : value}
          type={isShowEye ? 'text' : type}
          placeholder={placeholder}
          onChange={handleOnChange}
          className={styles.input}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          name={name}
          ref={ref}
        />
        {isPassword && (
          <div
            onClick={() => setIsShowEye(!isShowEye)}
            className={styles.innerRight}>
            {isShowEye ? <div>IconEye</div> : <div>IconEyeOff</div>}
          </div>
        )}
      </div>
    </div>
  );
};
