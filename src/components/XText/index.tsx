import styles from './index.module.scss';
import cn from 'classnames';

import { XLink } from '@/src/components/XLink';

import { HTMLAttributeAnchorTarget } from 'react';

interface IProps {
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
  constant: string;
  links: string[];
  texts: string[];
}

export const XText: React.FC<IProps> = ({
  className,
  constant,
  target,
  texts,
  links
}) => {
  const parts = constant.split(/({{\d}})/g);

  return (
    <div className={cn(styles.container, className)}>
      {parts?.map((part, index) => {
        if (/{{\d}}/g.test(part)) {
          const linkIndex = Number(part.replace(/[{}]/g, ''));
          return (
            <XLink
              href={links[linkIndex]}
              className={styles.link}
              target={target}
              key={index}
              underline>
              {texts[linkIndex]}
            </XLink>
          );
        } else {
          return (
            <span className={styles.text} key={index}>
              {part}
            </span>
          );
        }
      })}
    </div>
  );
};
