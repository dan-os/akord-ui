import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import { View } from 'react-native';

// import { Button } from './Button';
import { Input } from '@/components/ui/input';

const meta = {
  title: 'Example/Input',
  component: Input,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story></Story>
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // variant: 'default',
    // primary: true,
    // label: 'Button',
  },
};
