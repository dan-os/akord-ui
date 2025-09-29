import type { StorybookConfig } from '@storybook/react-native-web-vite';
import sucrase from '@rollup/plugin-sucrase';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    // component library
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // custom stories
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        jsxImportSource: 'nativewind', // default: 'react'
        // babel: {
        //   plugins: [
        //     // 'react-native-reanimated/plugin',
        //     // 'react-native-web'
        //   ],
        // },
      },
    },
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins?.unshift(
      sucrase({
        include: [/node_modules\/@rn-primitives\/.*\.mjs$/],
        transforms: ['jsx'],
      })
    );

    return mergeConfig(viteConfig, {
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            '.mjs': 'jsx',
            '.js': 'jsx',
          },
        },
      },
      build: {
        sourcemap: true, // Enable source maps for debugging
        minify: false, // Disable minification
      },
    });
  },
};

export default config;
