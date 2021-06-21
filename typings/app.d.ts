declare namespace App {
  type ThemeEnum = 'base';

  interface Theme {
    colors: {
      primary: string;
    };
    fonts: {
      body: string;
      heading?: string;
      monospace?: string;
    };
  }

  type Themes = Record<ThemeEnum, Theme>;
}
