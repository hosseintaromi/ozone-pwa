import { COLOR_ENUM, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import { formatNumberWithCommas } from '@/lib/helper';

import locale from '@/locale';

import { PayInDialogType } from '../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../share/modal';

const offerList = [
  {
    title: 'شامپو ضد شوره  صحت',
    value: 10000000,
  },
  {
    title: 'چای کیسه‌ای دبش (۲عدد)',
    value: 30000000,
  },
  {
    title: 'روغن آفتاب‌گردان لاله ۱۵ لیتری',
    value: 50000000,
  },
  {
    title: 'تخمه سیاه ۲ کیلو',
    value: 50000000,
  },
  {
    title: 'پسته مشهد',
    value: 50000,
  },
  {
    title: 'برنج ۲۰ کیلویی شمال',
    value: 50000000,
  },
  {
    title: 'چای کیسه‌ای ایرانی لاهیجان ۳۲ عددی با طعم آلبالو دبش',
    value: 50000000,
  },
];

const PurchaseDialog = (props: PayInDialogType) => {
  const { show, setShow } = props;
  const {
    app: { purchaseDetail },
  } = locale;

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={setShow}>
        <Text size={SIZE_ENUM.LG} medium>
          {purchaseDetail.listGoods}
        </Text>
        <Text size={SIZE_ENUM.SM} medium color={COLOR_ENUM.XLIGHT_GRAY} className='mt-4'>
          {purchaseDetail.accountNumber}: ۱۲۳۴۵۶۷۸۹۰۸۷
        </Text>
      </ModalHead>
      <ModalBody className='flex flex-col gap-2.5 text-right text-white'>
        <div className='grid grid-cols-12 border-b-2 border-b-neutral-600 pb-5'>
          <div className=' col-span-2'>{purchaseDetail.row}</div>
          <div className=' col-span-6 '>{purchaseDetail.product}</div>
          <div className=' col-span-4 text-left'>{purchaseDetail.price}</div>
        </div>
        {offerList.map((item, index) => {
          return (
            <div key={index + item.value} className='my-4 grid  grid-cols-12'>
              <div className=' col-span-2 mr-3 text-sm'>{index}</div>
              <div className=' col-span-6 text-sm text-neutral-200'>{item.title}</div>
              <div className=' col-span-4 text-left text-sm'>
                {formatNumberWithCommas(item.value) + ' ' + locale.common.rial}
              </div>
            </div>
          );
        })}
      </ModalBody>
    </Modal>
  );
};

export default PurchaseDialog;
