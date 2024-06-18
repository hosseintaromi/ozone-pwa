import * as Yup from 'yup';

import locale from '@/locale';

const mobile = Yup.string()
  .matches(
    /(0|\+98)?( |-|[()]){0,2}9[1|02349]( |-|[()]){0,2}(?:[0-9]( |-|[()]){0,2}){8}/,
    locale.error.wrongPhoneNumber,
  )
  .max(11, locale.error.wrongPhoneNumber);
const digit = Yup.string().matches(/^([۰-۹]|[0-9])+$/, 'pattern is not correct');

const validation = {
  mobile,
  digit,
};

export default validation;
