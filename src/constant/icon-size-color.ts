import colors from './colors';

const ICON_SIZE = {
  sm: 16,
  md: 18,
  lg: 24,
  xl: 32,
  xxl: 35,
} as const;

export const ICON_COLOR = {
  white: colors['neutral-0'],
  black: colors['neutral-950'],
  gray: colors['neutral-600'],
  light_gray: colors['neutral-300'],
  light_blue: colors['info-300'],
  primary: colors.primary,
  light_primary: colors['primary-300'],
  text_blue: colors['info-600'],
  secondary: colors.secondary,
  success: colors['success-250'],
  danger: colors['danger-300'],
  info: colors['info-300'],
} as const;
export const IconSize = {
  md: '18',
  lg: '22',
};

export default ICON_SIZE;
