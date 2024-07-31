export enum INPUT_TYPES {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export default interface BaseProps {
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
}
