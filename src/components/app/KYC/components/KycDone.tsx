import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';
import { ROUTES } from '@/constant/routes';
import locale from '@/locale';
import Link from 'next/link';
import { Container, Button } from 'ozone-uikit';

const KycDone = () => {
  const {
    app: { kyc },
  } = locale;
  return (
    <Container className='flex h-dvh flex-col justify-between px-5'>
      <Container center className='mx-auto mt-7 h-24 w-44'>
        <XImage
          src='/images/logo/horizontalLogo.svg'
          alt='Picture of the author'
          width={1000}
          height={1000}
        />
      </Container>
      <Container className='text-center'>
        <Container center className='mx-auto mt-7 h-24 w-44 flex-col'>
          <XImage
            src='/images/image/kycDone.svg'
            alt='Picture of the author'
            width={1000}
            height={1000}
          />
        </Container>
        <Text className='mt-10 w-full'>{kyc.doneTitle}</Text>
      </Container>
      <Container>
        <Link href={ROUTES.SETTING}>
          <Button className='mb-11 w-full py-6'>
            <Text>{kyc.backToApp}</Text>
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default KycDone;
