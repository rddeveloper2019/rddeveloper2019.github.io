import React, { useMemo, useState } from 'react';
import { DualRangeSlider } from '../../dual-range-slider';
import Card from '../../card/Card';
import { SlideValues } from '../../dual-range-slider/types';
import styles from './dual-range-slider-example.modlue.scss';

export const DualRangeSliderExample = () => {
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });

  const onSlide: (data: SlideValues) => void = ({ minValue, maxValue }) => {
    setSlideValues({ minValue, maxValue });
  };

  const array: number[] = useMemo(() => [...Array(200).keys()], []);

  const filterFGn = (item: number) => item >= slideValues.minValue && item <= slideValues.maxValue;
  return (
    <div>
      <DualRangeSlider onSlide={onSlide} min={35} max={85} />
      <Card>
        <div className={styles.elements}>
          {array.filter(filterFGn).map((item) => (
            <p key={item} className={styles.element}>
              {item}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};
