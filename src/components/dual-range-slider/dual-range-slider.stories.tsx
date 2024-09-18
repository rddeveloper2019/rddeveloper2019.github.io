import type { ArgTypes, Meta } from '@storybook/react';
import React, { useMemo, useState } from 'react';
import { DualRangeSliderProps, SlideValues } from '../../components/dual-range-slider/types';
import { DualRangeSlider } from '../../components/dual-range-slider/index';
import Card from '../../components/card/Card';

const DualRangeSliderExample = () => {
  const [slideValues, setSlideValues] = useState<SlideValues>({ minValue: 0, maxValue: 0 });

  const onSlide: (data: SlideValues) => void = ({ minValue, maxValue }) => {
    setSlideValues({ minValue, maxValue });
    console.log({ minValue, maxValue });
  };
  const array: number[] = useMemo(() => [...Array(200).keys()], []);

  return (
    <div>
      <DualRangeSlider onSlide={onSlide} min={35} max={85} />
      <Card>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: 20 }}>
          {array
            .filter((item) => item >= slideValues.minValue && item <= slideValues.maxValue)
            .map((item) => (
              <p key={item} style={{ padding: 2, border: '1px solid black', gap: 2 }}>
                {item}
              </p>
            ))}
        </div>
      </Card>
    </div>
  );
};

const meta: Meta<typeof DualRangeSlider> = {
  title: 'Components/DualRangeSlider',
  component: DualRangeSlider,
  render: ({ ...args }) => <DualRangeSliderExample />,
  tags: ['autodocs'],
  argTypes: {
    onSlide: 'function' as Partial<ArgTypes<DualRangeSliderProps>>,
  },
};

export default meta;

export const Default = {
  args: { children: () => <DualRangeSlider onSlide={console.log} />, visible: true },
};
