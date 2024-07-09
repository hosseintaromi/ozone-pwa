export enum LOGIN_STEPS {
  PHONE_NUMBER = 'phoneNumber',
  OTP = 'otp',
  PASSWORD = 'password',
}

export type SetStepType = React.Dispatch<React.SetStateAction<LOGIN_STEPS>>;
export type SetPhoneType = React.Dispatch<React.SetStateAction<string>>;
