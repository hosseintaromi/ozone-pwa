import React, { ReactNode } from 'react';
import Container from '../container';
import { Augur } from 'iconsax-react';
import { Text } from '../typography';
import { COLOR_ENUM, SIZE_ENUM } from '@/@types';
import cn from '@/lib/clsxm';

type wizardDataType = {
  title: string;
  icon: ReactNode;
};

const Wizard = ({
  data,
  activeItem,
}: {
  data: wizardDataType[];
  activeItem: number;
  setActiveNumber: any;
}) => {
  return (
    <Container className=' relative flex w-full justify-between'>
      {data.map((item, index) => (
        <div>
          {}
          <Container center className='flex-col gap-2'>
            <Container
              className={cn(
                `relative z-10
                             w-fit rounded-full bg-neutral-800 p-2.5 `,
                index <= activeItem ? 'text-primary' : 'text-neutral-500',
              )}
            >
              {item.icon}
            </Container>
            <Text
              className={cn(index <= activeItem ? 'text-primary' : 'text-neutral-300')}
              size={SIZE_ENUM.SM}
            >
              {item.title}
            </Text>
          </Container>
          <Container
            className={cn(
              `absolute  top-[20px]  border-b-[1px]`,
              index < activeItem ? 'border-primary' : 'border-neutral-700',
              index === 0 && 'right-[22%]  w-[80px]',
              index === 1 && 'left-[18%] w-[72px]',
              index > 1 && 'hidden',
            )}
          />
        </div>
      ))}
    </Container>
  );
};

export default Wizard;
