import type { Meta, StoryObj } from '@storybook/react';
import MediaCard, { MediaCardProps } from './MediaCard';
const meta = {
  title: 'Components/MediaCard',
  component: MediaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MediaCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: 'Default Title',
    description: 'This is a default description',
    primaryActionLabel: 'Default Primary',
    secondaryActionLabel: 'Default Secondary',
    actionsDisabled: false,
  },
};
export const NoActions: Story = {
  args: {
    title: 'No Actions Title',
    description: 'This card has no actions enabled',
    primaryActionLabel: 'Primary Action',
    secondaryActionLabel: 'Secondary Action',
    actionsDisabled: true,
  },
};
