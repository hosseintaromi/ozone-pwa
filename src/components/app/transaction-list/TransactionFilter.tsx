import { Container, SIZE_ENUM } from 'ozone-uikit';
import RadioOption from '@/components/share/input/radio/option';
import Circular from '@/components/share/input/radio/circular';
import XImage from '@/components/share/x-image';
import { RadioGroup } from '@/components/share/input/radio';
import React, { useEffect, useState } from 'react';
import { useGetBusinessesList } from '@/services/hooks';
import { invoicesListParams } from '@/models/transaction.model';
import useCommonModalStore from '@/store/common-modal-store';

const TransactionFilter = ({
  filter,
  setFilter,
}: {
  filter: Omit<invoicesListParams, 'page'>;
  setFilter: any;
}) => {
  const { setShow } = useCommonModalStore();
  const { data } = useGetBusinessesList();
  const [selectedItem, setSelectedItem] = useState(0);
  const handleChange = (value) => {
    setSelectedItem(value);
    setFilter({ ...filter, business_id: value.toString() });
    setShow(false);
  };
  useEffect(() => {
    filter?.business_id && setSelectedItem(+filter?.business_id);
  }, [filter]);
  return (
    <Container>
      <RadioGroup value={selectedItem} onChange={(value) => handleChange(value)}>
        {data?.map((item) => (
          <RadioOption value={item.id} key={item.id + 'chooseBusiness'}>
            {({ checked }) => (
              <Circular checked={checked} size={SIZE_ENUM.LG}>
                <Container center className='my-3 gap-4 text-white'>
                  <Container className=' w-11'>
                    <XImage
                      className='rounded-full'
                      src={item.logo_base_url + item.logo_path}
                      alt='Picture of the author'
                      width={1000}
                      height={1000}
                    />
                  </Container>
                  {item.name}
                </Container>
              </Circular>
            )}
          </RadioOption>
        ))}
      </RadioGroup>
    </Container>
  );
};

export default TransactionFilter;
