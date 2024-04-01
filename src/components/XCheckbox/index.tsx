import styles from './index.module.scss';
import cn from 'classnames';

import { IconCheck } from '@/src/assets/IconCheck';

interface IProps {
  value?: ReadonlyArray<string> | string | number;
  onChange?: (checked: boolean) => void;
  shape?: 'square' | 'round';
  text?: React.ReactNode;
  errorMessage?: string;
  infoMessage?: string;
  className?: string;
  disabled?: boolean;
  visible?: boolean;
  checked: boolean;
  label?: string;
  name?: string;
}

export const XCheckbox: React.FC<IProps> = ({
  shape = 'square',
  visible = true,
  errorMessage,
  infoMessage,
  className,
  onChange,
  disabled,
  checked,
  label,
  value,
  text,
  name
}) => {
  const handleChange = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  if (!visible) return null;

  return (
    <div className={cn(styles.container, className)}>
      {label && (
        <label className={styles.innerLabel} x-attr="x-label">
          {label}
        </label>
      )}
      <div className={styles.innerWrapper} onClick={handleChange}>
        <div className={cn(styles.inputSide, { [styles.active]: checked })}>
          <input
            className={cn(styles.input, styles[`shape-${shape}`])}
            onChange={() => null}
            readOnly={disabled}
            checked={checked}
            type="checkbox"
            value={value}
            name={name}
          />
          {checked && (
            <IconCheck className={styles.checkIcon} strokeWidth={2} />
          )}
        </div>
        {text && (
          <div className={styles.text} x-attr="x-text">
            {text}
          </div>
        )}
      </div>
      {infoMessage && <div className={styles.infoMessage}>{infoMessage}</div>}
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
