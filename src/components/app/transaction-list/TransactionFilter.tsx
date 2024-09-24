import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import RadioOption from '@/components/share/input/radio/option';
import Circular from '@/components/share/input/radio/circular';
import XImage from '@/components/share/x-image';
import { RadioGroup } from '@/components/share/input/radio';
import React, { useEffect, useState } from 'react';
import { useGetMerchantesList } from '@/services/hooks';
import { invoicesListParams } from '@/models/transaction.model';
import useCommonModalStore from '@/store/common-modal-store';
import locale from '@/locale';
import { Category2 } from 'iconsax-react';

const TransactionFilter = ({
  filter,
  setFilter,
}: {
  filter: Omit<invoicesListParams, 'page'>;
  setFilter: any;
}) => {
  const {
    common: { all },
    app: {
      purchaseDetail: { selectMerchantYouBuy },
    },
  } = locale;
  const { setShow } = useCommonModalStore();
  const { data } = useGetMerchantesList();
  const [selectedItem, setSelectedItem] = useState(-1);
  const handleChange = (value) => {
    if (value === -1) {
      setFilter({ ...filter, merchant_id: undefined });
    } else setFilter({ ...filter, merchant_id: value.toString() });
    setSelectedItem(value);

    setShow(false);
  };
  useEffect(() => {
    filter?.merchant_id && setSelectedItem(+filter?.merchant_id);
  }, [filter]);
  return (
    <Container>
      <Text semiBold size={SIZE_ENUM.SM} className='mb-6 text-right text-neutral-200'>
        {selectMerchantYouBuy}
      </Text>
      <Container className='max-h-[calc(100dvh-170px)] overflow-auto px-1'>
        <RadioGroup value={selectedItem} onChange={(value) => handleChange(value)}>
          <RadioOption value={-1}>
            {({ checked }) => (
              <Circular checked={checked} size={SIZE_ENUM.LG}>
                <Container center className='my-3 gap-4 text-white'>
                  <Category2 size='35' className='mr-1 text-white' />
                  {all}
                </Container>
              </Circular>
            )}
          </RadioOption>
          {data?.map((item) => (
            <RadioOption value={item.id} key={item.id + 'chooseMerchant'}>
              {({ checked }) => (
                <Circular checked={checked} size={SIZE_ENUM.LG}>
                  <Container center className='my-3 gap-4 text-white'>
                    <XImage
                      className='rounded-full'
                      src={item.logo_base_url + item.logo_path}
                      alt='Picture of the author'
                      width={42}
                      height={42}
                    />
                    {item.name}
                  </Container>
                </Circular>
              )}
            </RadioOption>
          ))}
        </RadioGroup>
      </Container>
    </Container>
  );
};

export default TransactionFilter;
