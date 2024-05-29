import { generate } from 'randomized-string';

import { GeneratorReturnType } from '@/constant/iterable-items/type';

export default function generator<R>(
  itemArr: GeneratorReturnType<R>[keyof GeneratorReturnType<R>][][],
  keys: string[],
) {
  return itemArr.map((item) => {
    const obj = {
      id: generate({ length: 3, charset: 'alphanumeric' }),
    };
    keys.map((name, index) => (obj[name] = item[index]));
    return obj;
  }) as ({ id: string } & R)[];
}
