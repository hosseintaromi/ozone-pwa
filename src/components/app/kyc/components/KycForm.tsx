import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';
import ICON_SIZE from '@/constant/icon-size-color';
import { convertRfcToJalali } from '@/lib/date';
import locale from '@/locale';
import { Calendar } from 'iconsax-react';
import { Container, SIZE_ENUM, COLOR_ENUM, Input, Button, VARIANT_ENUM } from 'ozone-uikit';
import { useEffect, useState } from 'react';
import { useKyc } from '@/services/hooks';
import CalenderDialog from './CalenderDialog';
import InlineInfo from './InlineInfo';
import { userMe } from '@/models/userManagement.model';
import { formatPhoneNumber } from '@/lib/helper';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';

const KycForm = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  const {
    app: { kyc },
    common,
  } = locale;
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [date, setDate] = useState('');

  const { mutate } = useKyc();

  const sendReq = () => {
    mutate(
      {
        birth_date: date,
        national_code: id,
      },
      {
        onSuccess: () => {
          setStep((pre) => pre + 1);
        },
      },
    );
  };

  const [cookieValue, setCookieValue] = useState<userMe | undefined>(undefined);

  useEffect(() => {
    try {
      const cookies = document.cookie
        .split('; ')
        .find((row) => row.startsWith('user='))
        ?.split('=')[1];

      if (cookies) {
        const parsedCookie = JSON.parse(decodeURIComponent(cookies));
        parsedCookie.mobile = formatPhoneNumber(parsedCookie.mobile);
        setCookieValue(parsedCookie);
      }
    } catch (error) {
      console.error('Error parsing cookie:', error);
    }
  }, []);

  return (
    <Container className='flex h-dvh flex-col justify-between px-5'>
      <Container>
        <Container center className='mx-auto mt-2 h-32 w-44'>
          <XImage
            src='/images/logo/horizontalLogo.svg'
            alt='Picture of the author'
            width={1000}
            height={1000}
          />
        </Container>
        <Text size={SIZE_ENUM.LG}>{kyc.title}</Text>
        <Text className='mt-3' size={SIZE_ENUM.SM} color={COLOR_ENUM.LIGHT_GRAY}>
          {kyc.desc}
        </Text>
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          labelClassName='text-[#96A5AE]'
          className='mt-4'
          label={kyc.nationalCode}
          size={SIZE_ENUM.XXL}
          maxLength={10}
        />
        <Container className='relative'>
          <Container className='absolute inset-0 z-10' onClick={() => setShow(true)} />
          <Input
            labelClassName='text-[#96A5AE]'
            className='my-7'
            label={kyc.dateBirth}
            size={SIZE_ENUM.XXL}
            color={COLOR_ENUM.LIGHT_GRAY}
            value={convertRfcToJalali(date)}
            disabled
            LeftIcon={() => <Calendar color='#96A5AE' size={ICON_SIZE.lg} />}
          />
        </Container>
        <InlineInfo text={kyc.tip(cookieValue?.mobile || '')} />
      </Container>
      <Container>
        <Button
          className='mb-5 w-full  py-6'
          disabled={!date || !id || id.length < 10}
          onClick={sendReq}
        >
          <Text>{common.record}</Text>
        </Button>
        <Link href={ROUTES.SETTING}>
          <Button
            variant={VARIANT_ENUM.OUTLINED}
            className='mb-11 w-full py-6'
            color={COLOR_ENUM.LIGHT_GRAY}
          >
            <Text color={COLOR_ENUM.LIGHT_GRAY}>{kyc.backToApp}</Text>
          </Button>
        </Link>
      </Container>
      <CalenderDialog show={show} setShow={setShow} setValue={setDate} />
    </Container>
  );
};

export default KycForm;
