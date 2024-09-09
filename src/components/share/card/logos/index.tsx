import { Container } from 'ozone-uikit';
import Props from './type';
import cn from '@/lib/clsxm';
import XImage from '../../x-image';

const Logos = ({ logos, isExpired }: Props) => {
  return (
    <Container center className='relative ml-3 min-h-20 w-[56px] justify-end'>
      {logos.length === 1 ? (
        <XImage
          src={`${logos[0].logo_base_url}${logos[0].logo_path}`}
          alt={logos[0].legal_name}
          width={40}
          height={40}
          className={cn(
            'rounded-full border-2 border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-800',
            isExpired && 'grayscale',
          )}
        />
      ) : (
        logos
          .slice(0, 3)
          .map((itm, index) => (
            <XImage
              key={`logos${itm.legal_name}${index}`}
              src={`${itm.logo_base_url}${itm.logo_path}`}
              alt={itm.legal_name}
              width={40}
              height={40}
              className={cn(
                index === 2 && 'opacity-60',
                'absolute rounded-full border-2 border-neutral-100 bg-white dark:border-neutral dark:bg-neutral-700',
                isExpired && 'grayscale',
              )}
              style={{ top: ` ${20 * index}px`, zIndex: 10 - index }}
            />
          ))
      )}
    </Container>
  );
};
export default Logos;
