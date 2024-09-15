import { SIZE_ENUM, Text } from 'ozone-uikit';
import React, { useEffect } from 'react';

import locale from '@/locale';

import { PayInDialogType } from '../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../share/modal';
import { addToTime } from '@/lib/date';
import { useTimer } from 'react-timer-hook';
import Container from '@/components/share/container';
import { addZeroIfUnder10, dateUntilFutureDate } from '@/lib/helper';
import { Clock } from 'iconsax-react';
import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import Barcode from 'react-barcode';
import Button from '@/components/share/button';
import { useGetQr } from '@/services/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constant/query-key';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';

const BarcodeDialog = (props: PayInDialogType) => {
  const { show, setShow } = props;
  const {
    app: { scan },
  } = locale;

  const queryClient = useQueryClient();

  const { data, isPending } = useGetQr(show);

  const { minutes, seconds, restart } = useTimer({
    expiryTimestamp: new Date(),
    onExpire: () => {
      queryClient.refetchQueries({ queryKey: [QUERY_KEYS.GET_QR_CODE] });
    },
  });
  useEffect(() => {
    const expiredTime = data?.expire_at
      ? dateUntilFutureDate(data?.expire_at, 'second', 'min')
      : 0;
    const time = addToTime(new Date(), expiredTime, { unit: 'SECONDS' });
    restart(time);
  }, [data]);

  function addSpacesBetweenDigits(input) {
    return input.split('').join('\u00A0\u00A0');
  }

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={setShow}></ModalHead>
      <ModalBody>
        <Text size={SIZE_ENUM.MD} className='mt-11 w-full text-center'>
          {scan.hint}
        </Text>
        <Container center className='mt-5 flex-col gap-1'>
          {isPending ? (
            <Container>
              <SkeletonLoader width='w-[300px]' height='h-20' />
            </Container>
          ) : (
            <Container>
              <Barcode
                displayValue={false}
                value={data?.serial || ''}
                background='#fff'
                lineColor='#000'
                height={70}
              />
              <Text size={SIZE_ENUM.MD} light className='ltr mt-5 w-full text-center'>
                {addSpacesBetweenDigits(data?.serial)}
              </Text>
            </Container>
          )}
        </Container>
        <Container center className='my-5 gap-1'>
          <Text className='mt-1 text-center ' size={SIZE_ENUM.MD}>
            {addZeroIfUnder10(minutes)}:{addZeroIfUnder10(seconds)}
          </Text>
          <Clock color={ICON_COLOR.white} size={ICON_SIZE.md} />
        </Container>
        <Button onClick={() => setShow(false)} className='mb-5 h-14 w-full'>
          {scan.closeButton}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default BarcodeDialog;
