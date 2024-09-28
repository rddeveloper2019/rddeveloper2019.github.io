import type { ArgTypes, Meta } from '@storybook/react';
import React from 'react';
import { DualRangeSliderProps } from '../../components/dual-range-slider/types';
import { DualRangeSlider } from '../../components/dual-range-slider/index';
import { DualRangeSliderExample } from './dual-range-slider-example/dual-range-slider-example';

const meta: Meta<typeof DualRangeSlider> = {
  title: 'Components/DualRangeSlider',
  component: DualRangeSlider,
  render: () => <DualRangeSliderExample />,
  tags: ['autodocs'],
  argTypes: {
    onSlide: 'function' as Partial<ArgTypes<DualRangeSliderProps>>,
  },
};

export default meta;

export const Default = {
  args: { children: () => <DualRangeSlider onSlide={console.log} />, visible: true },
};
