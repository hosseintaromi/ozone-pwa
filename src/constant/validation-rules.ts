import * as Yup from 'yup';

import locale from '@/locale';

const { error } = locale;
const mobile = Yup.string()
  .matches(
    /(0|\+98)?( |-|[()]){0,2}9[1|02349]( |-|[()]){0,2}(?:[0-9]( |-|[()]){0,2}){8}/,
    error.wrongPhoneNumber,
  )
  .max(11, error.wrongPhoneNumber);
const digit = Yup.string().matches(/^([۰-۹]|[0-9])+$/, 'pattern is not correct');
const amountCheck = Yup.number()
  .min(50000, error.amountMin)
  .max(99900000000, error.amountMax)
  .required('Amount is required');

const validation = {
  mobile,
  digit,
  amountCheck,
};

export default validation;
