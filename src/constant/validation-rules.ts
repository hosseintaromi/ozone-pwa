import * as Yup from 'yup';

import locale from '@/locale';

const { error } = locale;

const require = Yup.string().required(error.required);

const mobile = Yup.string()
  .matches(
    /(0|\+98)?( |-|[()]){0,2}9[1|02349]( |-|[()]){0,2}(?:[0-9]( |-|[()]){0,2}){8}/,
    error.wrongPhoneNumber,
  )
  .max(11, error.wrongPhoneNumber);
const digit = Yup.string().matches(/^([۰-۹]|[0-9])+$/, error.digits);
const amountCheck = Yup.number()
  .min(50000, error.amountMin)
  .max(99900000000, error.amountMax)
  .required(error.required);

const passwordSchema = Yup.string()
  .min(8, 'Password must be at least 8 characters long')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[!?.]/, 'Password must contain at least one special character (!, ?, .)');

const validation = {
  mobile,
  digit,
  amountCheck,
  require,
  passwordSchema,
};

export default validation;
