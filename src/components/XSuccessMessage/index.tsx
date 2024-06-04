import styles from './index.module.scss';
import cn from 'classnames';

import { IconCheck } from '@/src/assets/IconCheck';

import React, { useEffect, useState } from 'react';

type ContainerProps = {
  className?: string;
  text: string;
};

export default function XSuccessMessage(props: ContainerProps) {
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    if (props.text) {
      setShowLocation(true);
      const timer = setTimeout(() => {
        setShowLocation(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [props.text]);

  const errorClass = cn(styles.container, props.className, {
    [styles.location]: showLocation
  });

  return (
    <span className={errorClass}>
      <IconCheck />
      {props.text}
    </span>
  );
}
