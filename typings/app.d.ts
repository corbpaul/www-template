declare namespace App {
  type ThemeEnum = 'base';

  interface Theme {
    colors: {
      primary: string;
    };
  }

  type Themes = Record<ThemeEnum, Theme>;
}
