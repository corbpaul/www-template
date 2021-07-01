declare namespace App {
  // Theming
  type ThemeEnum = 'base';
  type Theme = import('theme-ui').Theme;
  type Themes = Record<ThemeEnum, Theme>;
}
