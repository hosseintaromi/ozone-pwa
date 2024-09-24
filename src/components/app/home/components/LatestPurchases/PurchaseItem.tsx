import cn from '@/lib/clsxm';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';
import Container from '@/components/share/container';
import XImage from '@/components/share/x-image';
import { ArrowLeft2 } from 'iconsax-react';
import { ICON_COLOR } from '@/constant/icon-size-color';
import { Text } from '@/components/share/typography';
import { COLOR_ENUM } from '@/@types';
import { formatNumberWithCommas } from '@/lib/helper';
import { convertRfcToJalaliWithClock } from '@/lib/date';
import React from 'react';
import { invoicesListBody } from '@/models/transaction.model';
import locale from '@/locale';

const PurchaseItem = ({ item, index }: { item: invoicesListBody; index: number }) => {
  const { common } = locale;
  return (
    <Container
      key={'invoice' + item.invoice.id + index}
      className={cn('mb-5 border-b-[1px] border-gray-700 pb-2')}
    >
      <Link href={`${ROUTES.PURCHASE_DETAIL}/${item.invoice.id}`}>
        <Container center className='justify-between'>
          <Container className=' w-8'>
            <XImage
              className='rounded-full'
              src={item.merchant.logo_base_url + item.merchant.logo_path}
              alt='Picture of the author'
              width={1000}
              height={1000}
            />
          </Container>
          <ArrowLeft2 color={ICON_COLOR.light_gray} />
        </Container>
        <Container center className='justify-between'>
          <Text color={COLOR_ENUM.WHITE}>{item.merchant.name}</Text>
          <Text>
            {formatNumberWithCommas(item.invoice.amount)} {common.rial}
          </Text>
        </Container>
        <Text color={COLOR_ENUM.LIGHT_GRAY}>
          {convertRfcToJalaliWithClock(item.invoice.created_at)}
        </Text>
      </Link>
    </Container>
  );
};
export default PurchaseItem;
