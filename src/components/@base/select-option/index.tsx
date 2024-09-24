import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { ArrowDown2 } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import cn from '@/lib/clsxm';
import XImage from '@/components/share/x-image';
import { useGetMerchantesList } from '@/services/hooks';
import { merchantList, selectedStore } from '@/models/userManagement.model';
export default function SelectOption({
  title,
  selected,
  selectedHandler,
  selectAll,
}: {
  title: string;
  selected: selectedStore;
  selectedHandler: (data: selectedStore) => void;
  selectAll: merchantList;
}) {
  const { data } = useGetMerchantesList();
  const [merchantes, setMerchantes] = useState<selectedStore[]>([]);
  useEffect(() => {
    if (data) {
      setMerchantes([selectAll, ...data]);
    }
  }, [data]);
  return (
    <Container className='relative'>
      <Text size={SIZE_ENUM.MD} className='mb-4 text-white'>
        {title}
      </Text>
      <Listbox value={selected} onChange={selectedHandler}>
        {({ open }) => (
          <>
            <ListboxButton
              className={cn(
                'relative flex h-14 w-full items-center gap-2 rounded-[10px] border-[1px] border-neutral-500 p-2 pr-3 text-right text-base text-white',
                open && 'border-primary',
              )}
            >
              {selected.logo ? (
                selected.logo
              ) : (
                <XImage
                  className='rounded-full'
                  src={selected.logo_base_url + selected.logo_path}
                  alt={selected.name}
                  width={30}
                  height={30}
                />
              )}
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
              {merchantes.map((merchant) => (
                <ListboxOption
                  key={merchant.name}
                  value={merchant}
                  className='group flex cursor-default select-none items-center gap-4 rounded-lg px-3 py-2.5 data-[focus]:bg-white/10'
                >
                  {merchant.logo ? (
                    merchant.logo
                  ) : (
                    <XImage
                      className='rounded-full'
                      src={merchant.logo_base_url + merchant.logo_path}
                      alt={merchant.name}
                      width={30}
                      height={30}
                    />
                  )}
                  <Text size={SIZE_ENUM.LG} className='text-white'>
                    {merchant.name}
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
