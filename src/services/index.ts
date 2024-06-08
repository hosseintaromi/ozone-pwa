import { httpGetRequest } from '@/lib/baseHttpService';
import { APIUrlGenerator } from '@/lib/helper';

import { API_ROUTES } from '@/constant/routes';

// export const postProfile = async (body: any): Promise<UserModel> => {
//   const { data }: { data: UserModel } = await axios.post(
//     APIUrlGenerator(API_ROUTES.GET_SERVICES),
//     { ...AUTH, ...body },
//   );
//   return data;
// };

// export const getPeople = async (id: number): Promise<UserModel> => {
//   const { data }: { data: UserModel } = await axios.get(
//     APIUrlGenerator(API_ROUTES.GET_USER(id)),
//   );
//   return data;
// };

// export const postProductPurchase = (data: postProductPurchaseIn) =>
//   httpPostRequest<postProductPurchaseOut>(`product/${data.id}`, data).then(
//     (res) => res
//   );

export const getPeople = (id: number) =>
  httpGetRequest<any>(APIUrlGenerator(API_ROUTES.GET_USER(id))).then((res) => res.data);
