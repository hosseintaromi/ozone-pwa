import { COLOR_ENUM, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import { formatNumberWithCommas } from '@/lib/helper';

import locale from '@/locale';

import { PurchaseDetailType } from '../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../share/modal';

const PurchaseDialog = (props: PurchaseDetailType) => {
  const { show, setShow, data } = props;
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
        {data?.items.map((item, index) => {
          return (
            <div key={index + item.amount} className='my-4 grid  grid-cols-12'>
              <div className=' col-span-2 mr-3 text-sm'>{index + 1}</div>
              <div className=' col-span-6 text-sm text-neutral-200'>{item.name}</div>
              <div className=' col-span-4 text-left text-sm'>
                {formatNumberWithCommas(item.amount) + ' ' + locale.common.rial}
              </div>
            </div>
          );
        })}
      </ModalBody>
    </Modal>
  );
};

export default PurchaseDialog;
