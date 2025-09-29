import '@/global.css';

import React from 'react';

import { useColorScheme } from 'nativewind';
import { ThemeProvider } from '@react-navigation/native';
import type { Preview } from '@storybook/react-native-web-vite';

import { NAV_THEME } from '../lib/theme';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [
    (Story, { globals }) => {
      const { colorScheme, setColorScheme } = useColorScheme();
      setColorScheme(globals.backgrounds?.value ?? 'light');

      return (
        <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
