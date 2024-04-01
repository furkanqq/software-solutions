import styles from './index.module.scss';
import cn from 'classnames';

import { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';

interface IProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: HTMLAttributeAnchorTarget | undefined;
  'aria-disabled'?: undefined | boolean;
  className?: undefined | string;
  visible?: undefined | boolean;
  children?: React.ReactNode;
  dir?: undefined | string;
  locale?: string | false;
  'aria-label'?: string;
  underline?: boolean;
  isHover?: boolean;
  href: string;
  as?: string;
}

export const XLink: React.FC<IProps> = ({
  'aria-disabled': ariaDisabled,
  'aria-label': ariaLabel,
  visible = true,
  className,
  underline,
  children,
  isHover,
  onClick,
  locale,
  target,
  href,
  dir,
  as
}) => {
  if (!visible) return null;

  return (
    <Link
      className={cn(styles.container, className, {
        [styles.textUnderline]: underline,
        [styles.disabled]: ariaDisabled,
        [styles.isHover]: isHover
      })}
      aria-disabled={ariaDisabled}
      aria-label={ariaLabel}
      onClick={onClick}
      target={target}
      locale={locale}
      href={href}
      dir={dir}
      as={as}>
      {children}
    </Link>
  );
};
