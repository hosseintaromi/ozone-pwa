import { ArrowDown, ArrowLeft2, ArrowUp } from 'iconsax-react';
import { Container, Text } from 'ozone-uikit';
import React from 'react';

import cn from '@/lib/clsxm';

import colors from '@/constant/colors';
import ICON_SIZE, { IconSize } from '@/constant/icon-size-color';
import common from '@/locale/common';

import { HorizontalCardType } from './home';

const HorizontalCard = ({ data }: { data: HorizontalCardType }) => {
  return (
    <Container className='flex flex-col border-b-[1px] border-neutral-500 pb-5 pt-5'>
      <Container center className='w-full gap-3'>
        <Container
          className={cn(
            data.isPayIn ? 'bg-primary/30' : 'bg-alert-500/10',
            `h-fit w-fit rounded-lg p-2`,
          )}
        >
          {data.isPayIn ? (
            <ArrowDown size={IconSize.lg} color={colors.primary} />
          ) : (
            <ArrowUp size={IconSize.lg} color={colors['alert-500']} />
          )}
        </Container>
        <Container className='w-full flex-col gap-1' center>
          <Container center className='w-full justify-between'>
            <Text className='font-bold'>{data.title}</Text>
            <Text className='text-sm'>
              {data.amount} {' ' + common.rial}
            </Text>
          </Container>
          <Container center className='w-full justify-between'>
            <Text className='mt-2 text-sm text-neutral-500'>{data.date}</Text>
            <ArrowLeft2 size={ICON_SIZE.sm} color={colors['neutral-500']} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default HorizontalCard;
