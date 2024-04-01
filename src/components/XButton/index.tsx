import styles from './index.module.scss';
import cn from 'classnames';

import { IXButtonProps } from '@/src/components/XButton/type';

type TEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export const XButton: React.FC<IXButtonProps> = ({
  visible = true,
  className,
  fullWidth,
  rightIcon,
  children,
  disabled,
  leftIcon,
  onClick,
  loader,
  color,
  type
}) => {
  const handleClick = (event: TEvent) => {
    if (!disabled && onClick) {
      onClick?.(event);
    }
  };

  if (!visible) return null;

  return (
    <button
      className={cn(styles.container, styles[`color-${color}`], className, {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled
      })}
      data-loading={loader}
      onClick={handleClick}
      disabled={disabled}
      type={type}>
      {leftIcon && !loader ? (
        <div className={cn(styles.iconLayer, styles.leftIcon)}>{leftIcon}</div>
      ) : null}
      {loader ? (
        <div className={cn(styles.loaderLayer, styles[`loader-${color}`])} />
      ) : (
        <span x-attr="x-text">{children}</span>
      )}
      {rightIcon && !loader ? (
        <div className={cn(styles.iconLayer, styles.rightIcon)}>
          {rightIcon}
        </div>
      ) : null}
    </button>
  );
};
