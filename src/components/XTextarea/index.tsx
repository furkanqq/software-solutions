import styles from './index.module.scss';
import cn from 'classnames';

import { ChangeEvent, useEffect, useState } from 'react';

interface IProps {
  onChange?: (value: string) => void;
  placeholder?: undefined | string;
  className?: undefined | string;
  rows?: undefined | number;
  errorMessage?: string;
  value?: string | null;
  infoMessage?: string;
  readOnly?: boolean;
  visible?: boolean;
  label?: string;
  name?: string;
}

export const XTextarea: React.FC<IProps> = ({
  visible = true,
  errorMessage,
  placeholder,
  infoMessage,
  className,
  readOnly,
  rows = 4,
  onChange,
  label,
  value,
  name
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
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

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
  };

  if (!visible) return null;

  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <label className={styles.innerLabel} x-attr="x-label">
          {label}
        </label>
      )}
      <div
        className={cn(styles.innerWrapper, {
          [styles.active]: isActive && !readOnly,
          [styles.readOnly]: readOnly,
          [styles.error]: isError
        })}>
        <textarea
          value={value === null ? '' : value}
          className={styles.textarea}
          placeholder={placeholder}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          rows={rows}
          name={name}
        />
      </div>
      {infoMessage && <div className={styles.infoMessage}>{infoMessage}</div>}
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
