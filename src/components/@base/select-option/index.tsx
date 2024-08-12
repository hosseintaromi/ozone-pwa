import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { useState } from 'react';
import locale from '@/locale';
import { ArrowDown2, Category2 } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import cn from '@/lib/clsxm';
import XImage from '@/components/share/x-image';
import filmNet from '../../../../public/images/mock/filmeNet.svg';

export default function SelectOption({ title }: { title: string }) {
  const {
    common: { all },
  } = locale;
  const people = [
    { id: 0, name: all, logo: <Category2 size='20' className='text-white' /> },
    {
      id: 1,
      name: 'Tom Cook',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 2,
      name: 'Wade Cooper',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 3,
      name: 'Tanya Fox',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 4,
      name: 'Arlene Mccoy',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
    {
      id: 5,
      name: 'Devon Webb',
      logo: (
        <Container className='h-7 w-7 rounded-full bg-white p-1'>
          <XImage src={filmNet} alt='logo' />
        </Container>
      ),
    },
  ];
  const [selected, setSelected] = useState(people[1]);
  return (
    <Container className='relative'>
      <Text size={SIZE_ENUM.MD} className='mb-4 text-white'>
        {title}
      </Text>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <ListboxButton
              className={cn(
                'relative flex h-14 w-full items-center gap-2 rounded-[10px] border-[1px] border-neutral-500 p-2 pr-3 text-right text-base text-white',
                open && 'border-primary',
              )}
            >
              {selected.logo}
              <Text size={SIZE_ENUM.LG} className='text-white'>
                {selected.name}
              </Text>

              <ArrowDown2
                size='24'
                className={cn('absolute left-2.5 top-3.5 text-white', open && 'rotate-180')}
              />
            </ListboxButton>
            <ListboxOptions
              className={cn(
                'absolute z-50 mx-auto mt-3 max-h-[220px] w-full overflow-auto rounded-xl border-[1px] border-neutral-700 bg-neutral-900 p-2',
                'opacity-100 transition duration-100 ease-in',
                !open && 'opacity-0',
              )}
            >
              {people.map((person) => (
                <ListboxOption
                  key={person.name}
                  value={person}
                  className='group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-2.5 data-[focus]:bg-white/10'
                >
                  {person.logo}
                  <Text size={SIZE_ENUM.LG} className='text-white'>
                    {person.name}
                  </Text>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </Container>
  );
}
