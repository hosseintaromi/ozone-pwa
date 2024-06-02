import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import { Props } from '@/components/@base/stepper/type';
import { Text } from '@/components/@base/typography';
export default function Stepper({ steps }: Props) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(params?.step);
  useEffect(() => {
    setActive(params?.step);
  }, [params?.step]);
  const handleClick = (step) => {
    if (step.id < params?.step) {
      router.push(`/${pathname.split('/')[1]}/${step.id}`);
    }
  };
  return (
    <Container center>
      <ol className='flex w-full items-center'>
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={cn(
              "after:border-1 flex w-full flex-col items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10 dark:text-blue-500 dark:after:border-gray-700",
              index === steps.length - 1 && 'flex w-full flex-col items-center',
            )}
            onClick={() => handleClick(step)}
          >
            <span
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 lg:h-12 lg:w-12 dark:bg-gray-700',
                `${step.id}` === active && 'bg-secondary text-white hover:bg-secondary/80',
                `${step.id}` <= active && 'bg-secondary text-white hover:bg-secondary/80',
              )}
            >
              {`${step.id}` < active ? (
                <svg
                  data-v-7a99e10c=''
                  width='14'
                  height='10'
                  viewBox='0 0 14 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.1489 0.635014C13.4418 0.927907 13.4418 1.40278 13.1489 1.69567L5.47963 9.36495C5.18674 9.65784 4.71186 9.65784 4.41897 9.36495L0.851262 5.79724C0.558368 5.50434 0.558368 5.02947 0.851262 4.73658C1.14415 4.44368 1.61903 4.44368 1.91192 4.73658L4.9493 7.77396L12.0882 0.635014C12.3811 0.342121 12.856 0.342121 13.1489 0.635014Z'
                    fill='white'
                  ></path>
                </svg>
              ) : (
                step.id
              )}
            </span>
            {step.Icon && <step.Icon />}
            <Text>{step.name}</Text>
          </li>
        ))}
      </ol>
    </Container>
  );
}
