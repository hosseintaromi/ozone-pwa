import React, { ReactNode } from 'react';
import Container from '../container';
import { Text } from '../typography';
import { SIZE_ENUM } from '@/@types';
import cn from '@/lib/clsxm';

type wizardDataType = {
  title: string;
  icon: ReactNode;
};

const Wizard = ({
  data,
  activeItem,
  setActiveNumber,
}: {
  data: wizardDataType[];
  activeItem: number;
  setActiveNumber: any;
}) => {
  const handleSelectWizardItem = (itemIndex: number) => {
    if (itemIndex < activeItem) setActiveNumber(itemIndex);
  };
  return (
    <Container className=' relative flex w-full justify-between'>
      {data.map((item, index) => (
        <>
          <Container
            center
            className='w-[75px] flex-col gap-2'
            onClick={() => handleSelectWizardItem(index)}
          >
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
              className={cn(
                'whitespace-nowrap',
                index <= activeItem ? 'text-primary' : 'text-neutral-300',
              )}
              size={SIZE_ENUM.SM}
            >
              {item.title}
            </Text>
          </Container>
          <Container
            className={cn(
              `absolute  top-[20px]  border-b-[1px]`,
              index < activeItem ? 'border-primary' : 'border-neutral-700',
              index === 0 && 'right-[19%]  w-[80px]',
              index === 1 && 'left-[19%] w-[80px]',
              index > 1 && 'hidden',
            )}
          />
        </>
      ))}
    </Container>
  );
};

export default Wizard;
