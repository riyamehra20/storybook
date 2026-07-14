import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Primary = {
  args: { variant: 'primary' },
};

export const Secondary = {
  args: { variant: 'secondary' },
};

export const Danger = {
  args: { variant: 'danger' },
};

export const Disabled = {
  args: { variant: 'primary', disabled: true },
};
