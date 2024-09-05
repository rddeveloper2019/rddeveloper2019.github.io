import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './card.module.scss';
import cn from 'clsx';
import { CardPropsType } from '../../components/card/types';
import { useObserver } from '../../hooks/useObserver';

const Card: FC<CardPropsType> = ({ children, width, onIntersect, onClick, isLast = false }) => {
  const cardRef = useRef<HTMLDivElement>();

  const [entry] = useObserver(cardRef, { rootMargin: '200px' });
  const [renderedEntry] = useObserver(cardRef, { rootMargin: '0px' });

  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!entry) return;

    if (entry.isIntersecting && isLast) {
      onIntersect();
    }
  }, [entry, isLast]);

  useEffect(() => {
    if (renderedEntry?.isIntersecting) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [renderedEntry]);

  return (
    <div
      className={cn(styles.card, inView ? styles.shown : styles.hidden)}
      style={{ width: width }}
      onClick={() => onClick?.()}
      ref={cardRef}
    >
      {children}
    </div>
  );
};

export default Card;
