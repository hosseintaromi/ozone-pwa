import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import XImage from '@/components/share/x-image';
import { voucherBusinesses } from '@/models/digitalWallet.model';
import cn from '@/lib/clsxm';
import { useEffect, useState } from 'react';
import { ArrowDown2, CloseCircle } from 'iconsax-react';
import commonModalStore from '@/store/common-modal-store';
import locale from '@/locale';

const Logos = ({ logos, expired }: { logos: voucherBusinesses[]; expired: boolean }) => {
  const {
    common: { stores },
    app: {
      voucher: { couponCanUseIn },
    },
  } = locale;
  const [titles, setTitles] = useState<string>();
  const { setShow } = commonModalStore();
  const handleShowStore = () => {
    setShow(true, {
      Head: () => (
        <Container center className='w-full justify-between px-1 py-4'>
          <Text bold className='text-xl text-white'>
            {stores}
          </Text>
          <CloseCircle size='32' className='text-neutral-200' onClick={() => setShow(false)} />
        </Container>
      ),
      Body: () => (
        <Container className='flex flex-col gap-3 px-1'>
          <Text bold className='mb-4 text-sm text-neutral-200'>
            {couponCanUseIn}
          </Text>
          {logos?.map((l) => (
            <Container
              center
              className='h-[58px] w-full justify-start gap-4 rounded-xl bg-neutral-800 px-4 py-2'
            >
              <XImage
                src={`${l.logo_base_url}${l.logo_path}`}
                alt={l.legal_name}
                width={42}
                height={42}
                className={cn(
                  'rounded-full border-2 border-neutral-100 bg-white',
                  expired && 'grayscale',
                )}
              />
              <Text bold className='text-base text-white'>
                {l.name}
              </Text>
            </Container>
          ))}
        </Container>
      ),
    });
  };
  useEffect(() => {
    if (logos?.length > 1) {
      const theTitles: string[] = [];
      logos?.slice(0, 4).map((itm) => {
        theTitles.push(itm.name);
      });
      setTitles(theTitles.join(','));
    }
  }, []);
  return (
    <Container
      center
      className={cn(
        'relative min-h-20 justify-end',
        logos?.length > 1 && 'w-[70px]',
        logos?.length > 2 && 'w-[110px]',
        logos?.length > 3 && 'w-[140px]',
      )}
    >
      {logos?.length === 1 ? (
        <Container center className='flex-col gap-3'>
          <XImage
            src={`${logos[0].logo_base_url}${logos[0].logo_path}`}
            alt={logos[0].legal_name}
            width={42}
            height={42}
            className={cn(
              'rounded-full border-2 border-neutral-700 bg-neutral-800',
              expired && 'grayscale',
            )}
          />
          <Text size={SIZE_ENUM.SM} medium className='text-neutral-200'>
            {logos[0].name}
          </Text>
        </Container>
      ) : (
        logos?.slice(0, 4).map((itm, index) => {
          return (
            <XImage
              src={`${itm.logo_base_url}${itm.logo_path}`}
              alt={itm.legal_name}
              width={42}
              height={42}
              className={cn(
                'absolute top-0 rounded-full border-2 border-neutral-100 bg-white',
                expired && 'grayscale',
                index === 3 && 'opacity-30',
              )}
              style={{ right: ` ${30 * index}px`, zIndex: 10 - index }}
            />
          );
        })
      )}
      {logos?.length > 3 && (
        <ArrowDown2
          size='22'
          className='absolute -left-7 top-2 text-primary'
          onClick={handleShowStore}
        />
      )}
      <Text size={SIZE_ENUM.SM} medium className='absolute -bottom-2 text-neutral-200'>
        {titles}
      </Text>
    </Container>
  );
};
export default Logos;
