import SelectOption from '@/components/@base/select-option';
import { Button, Container, SIZE_ENUM, Text, VARIANT_ENUM } from 'ozone-uikit';
import locale from '@/locale';
import { RadioGroup } from '@/components/share/input/radio';
import RadioOption from '@/components/share/input/radio/option';
import React, { useEffect, useState } from 'react';
import Circular from '@/components/share/input/radio/circular';
import cn from '@/lib/clsxm';
import { Box, Category2, Gift, Tag } from 'iconsax-react';

const Filter = () => {
  const {
    common,
    app: {
      voucher: { selectStore, couponSituation, couponType },
    },
  } = locale;
  const couponSituations = ['all', 'active', 'inActive'];
  const defaultSelectedStore = {
    account_id: 0,
    legal_name: common.all,
    is_active: true,
    id: 0,
    name: common.all,
    logo_base_url: '',
    logo_path: '',
    logo: <Category2 size='30' className='text-white' />,
  };
  const [selected, setSelected] = useState(defaultSelectedStore);
  const [couponTypes, setCouponTypes] = useState([
    {
      type: 'gift',
      icon: (checked: boolean) => (
        <Gift size='24' className={cn('text-neutral-500', checked && 'text-primary')} />
      ),
      checked: true,
    },
    {
      type: 'promotion',
      icon: (checked: boolean) => (
        <Box size='24' className={cn('text-neutral-500', checked && 'text-primary')} />
      ),
      checked: false,
    },
    {
      type: 'isSell',
      icon: (checked: boolean) => (
        <Tag size='24' className={cn('text-neutral-500', checked && 'text-primary')} />
      ),
      checked: false,
    },
  ]);
  const [selectedItem, setSelectedItem] = useState<string>('all');
  const handleChange = (value) => {
    setSelectedItem(value);
  };
  const handleSelectCouponType = (item) => {
    const updated = couponTypes.map((c) => {
      if (c.type === item.type) {
        return {
          ...c,
          checked: !item.checked,
        };
      } else return c;
    });
    setCouponTypes(updated);
  };
  return (
    <Container className='mt-6 flex flex-col gap-10'>
      <SelectOption
        selectAll={defaultSelectedStore}
        title={selectStore}
        selected={selected}
        selectedHandler={(e) => setSelected(e)}
      />
      <Container>
        <Text size={SIZE_ENUM.MD}>{couponSituation}</Text>
        <RadioGroup
          value={selectedItem}
          onChange={(value) => handleChange(value)}
          className='mt-4 flex w-full gap-4'
        >
          {couponSituations.map((item) => (
            <RadioOption value={item} key={item} className='flex h-14 w-full'>
              {({ checked }) => (
                <Circular
                  checked={checked}
                  size={SIZE_ENUM.LG}
                  className={cn(
                    'flex-row-reverse justify-end gap-2 rounded-xl border-[1px] border-neutral-700 pr-3.5',
                    checked && 'border-primary',
                  )}
                >
                  <Text className={cn('text-neutral-500', checked && 'text-primary')}>
                    {common[item]}
                  </Text>
                </Circular>
              )}
            </RadioOption>
          ))}
        </RadioGroup>
      </Container>
      <Container>
        <Text size={SIZE_ENUM.MD}>{couponType}</Text>
        <Container className='mt-4 flex w-full gap-4'>
          {couponTypes.map((item) => (
            <Container
              key={item.type}
              onClick={() => handleSelectCouponType(item)}
              center
              className={cn(
                'h-[110px] w-full flex-col justify-center gap-2 rounded-xl border-[1px] border-neutral-700',
                item.checked && 'border-primary',
              )}
            >
              {item.icon(item.checked)}
              <Text className={cn('text-neutral-500', item.checked && 'text-primary')}>
                {common[item.type]}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
      <Container center className='my-6 justify-between gap-4 '>
        <Button size={SIZE_ENUM.XXL} className='w-full p-1'>
          {common.filter}
        </Button>
        <Button
          size={SIZE_ENUM.XXL}
          variant={VARIANT_ENUM.OUTLINED}
          className='w-full border-[1px] border-neutral-500 p-1 text-neutral-500'
        >
          {common.cancelFilter}
        </Button>
      </Container>
    </Container>
  );
};

export default Filter;
