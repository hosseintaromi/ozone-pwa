'use client';
import { COLOR_ENUM, Container, SIZE_ENUM, Text } from 'ozone-uikit';

import { currency, persianDateGenerator2 } from '@/lib/helper';
import cn from '@/lib/clsxm';
import React from 'react';
import XImage from '@/components/share/x-image';
import locale from '@/locale';
import { receiptResType } from '@/constant/receipt.model';

const ReceiptCard = ({ data }: { data: receiptResType }) => {
  const {
    common: {
      dataAndTime,
      issueTracking,
      rial,
      successfulTransaction,
      transactionFailed,
      paidAmount,
      transactionType,
    },
  } = locale;
  const { bank_amount, status, ref_number, bank_transaction_date } = data;

  const items = [
    {
      title: dataAndTime,
      amount: bank_transaction_date
        ? persianDateGenerator2(new Date(bank_transaction_date))
        : persianDateGenerator2(new Date()),
    },
    {
      title: transactionType,
      amount: 'شارژ کیف پول',
    },
    {
      title: issueTracking,
      amount: ref_number,
    },

    {
      title: paidAmount,
      amount: bank_amount,
    },
  ];

  return (
    <Container
      center
      className='mx-auto w-full max-w-[950px] flex-col gap-3 rounded-xl bg-neutral-800 p-5 pb-2'
    >
      <Container
        center
        className='gray-down-dash-border relative mb-3 w-full max-w-[420px] flex-col gap-2 pb-3'
      >
        <XImage
          src={status === 'SUCCESS' ? '/images/logo/success.svg' : '/images/logo/fail.svg'}
          width={72}
          height={72}
          alt='success logo'
        />

        <Text size={SIZE_ENUM.MD} bold className='my-4 text-neutral-0'>
          {status === 'SUCCESS' ? successfulTransaction : transactionFailed}
        </Text>
        <span
          className={
            'absolute -bottom-2.5 -right-[20px] h-5 w-[10px] rounded-bl-full rounded-tl-full' +
            ' bg-neutral-900'
          }
        />
        <span
          className={
            'absolute -bottom-2.5 -left-[20px] h-5 w-[10px] rounded-br-full rounded-tr-full' +
            ' bg-neutral-900'
          }
        />
      </Container>
      <Container center className='w-full max-w-[420px] flex-col pt-2 md:pt-6'>
        {items.map((i, index) => (
          <Container
            center
            className={cn(
              'mb-4 w-full justify-between',
              index === 3 && 'mt-1 border-t-[1px] border-neutral-700 pt-4',
            )}
          >
            <Text medium size={SIZE_ENUM.SM} className='text-neutral-200'>
              {i.title}
            </Text>
            {index < 3 ? (
              <Text bold size={SIZE_ENUM.SM} className='text-neutral-0'>
                {i.amount}
              </Text>
            ) : (
              <Container center className='gap-1'>
                <Text bold size={SIZE_ENUM.LG} color={COLOR_ENUM.PRIMARY}>
                  {currency(+i.amount)}
                </Text>
                <Text medium size={SIZE_ENUM.MD} color={COLOR_ENUM.PRIMARY}>
                  {rial}
                </Text>
              </Container>
            )}
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default ReceiptCard;
