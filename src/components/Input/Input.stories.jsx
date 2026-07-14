import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
    disabled: false,
    required: false,
    error: '',
  },
};

export const Default = {};

export const Required = {
  args: { required: true },
};

export const WithError = {
  args: { error: 'Please enter a valid email address.' },
};

export const Disabled = {
  args: { disabled: true },
};
