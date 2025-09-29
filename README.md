# React Native Component Library

This is a [React Native](https://reactnative.dev/) project built with [Storybook](https://storybook.js.org/) and [React Native Reusables](https://reactnativereusables.com).

## Getting Started

To run the development server:

```bash
pnpm run storybook
```

This will start the Storybook Dev Server.
## Adding components

You can add more reusable components using the CLI:

```bash
# note: use pnpm equivalent
npx react-native-reusables/cli@latest add [...components]
```

> e.g. `npx react-native-reusables/cli@latest add input textarea`

If you don't specify any component names, you'll be prompted to select which components to add interactively. Use the `--all` flag to install all available components at once.

## Project Features

- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com/) via [Nativewind](https://www.nativewind.dev/)
- 📦 UI powered by [React Native Reusables](https://github.com/founded-labs/react-native-reusables)
- 📱 Runs on iOS, Android, and Web

## Learn More

To dive deeper into the technologies used:

- [Storybook Docs](https://storybook.js.org/docs)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [Nativewind Docs](https://www.nativewind.dev/)
- [React Native Reusables](https://reactnativereusables.com)
