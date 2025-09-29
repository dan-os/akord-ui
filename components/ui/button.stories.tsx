import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import { View } from 'react-native';
import { fn, expect } from 'storybook/test';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

type ButtonPropsAndCustomArgs = React.ComponentProps<typeof Button> & { childText: string };

const meta = {
  title: 'Base/Button',
  component: Button,
  render: ({ childText, ...args }) => (
    <Button {...args}>
      <Text>{childText}</Text>
    </Button>
  ),
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost'],
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry:
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs', 'shadcn/ui'],
  args: {
    childText: "I'm a button!",
    // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked:
    // https://storybook.js.org/docs/essentials/actions#action-args
    onPress: fn(),
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step('Button can be clicked', async () => {
      // Click the button
      const submitButton = canvas.getByRole('button');
      await userEvent.click(submitButton);
      // Validate the click event fired once
      await expect(args.onPress).toHaveBeenCalledOnce();
    });
  },
} satisfies Meta<ButtonPropsAndCustomArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};
