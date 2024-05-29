import * as Yup from 'yup';

//FIXME: use localization for all hardcode strings
import localization from '@/constant/localization';

export const mobile = Yup.string()
  .matches(
    /(0|\+98)?( |-|[()]){0,2}9[1|02349]( |-|[()]){0,2}(?:[0-9]( |-|[()]){0,2}){8}/,
    'phone is incorrect',
  )
  .max(11, 'phone not match');
export const digit = Yup.string().matches(/^([۰-۹]|[0-9])+$/, 'pattern is not correct');
