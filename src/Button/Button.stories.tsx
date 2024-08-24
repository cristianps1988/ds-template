import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'CoreUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: 'Button Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: 'Button secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button Large',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button Small',
  },
};