import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import cn from '@/lib/clsxm';
import { createPathQueryString } from '@/lib/helper';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import DropDownList from '@/components/@base/input/drop-down/list';
import DropDownItem from '@/components/@base/input/drop-down/list/item';
import DropDownSearch from '@/components/@base/input/drop-down/search';
import Props from '@/components/@base/input/drop-down/type';
import Modal, { ModalBody } from '@/components/@base/modal';
import Spinner from '@/components/@base/spinner';
import { Text } from '@/components/@base/typography';

import { DROP_DOWN } from '@/constant/search-params';

export default function DropDown({
  id,
  title,
  isLoading,
  onOpen,
  open,
  size = SIZE_ENUM.MD,
  disable = false,
  text,
  children,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const hasMenu = searchParams.get(DROP_DOWN) === id;

  const onClose = () => {
    router.back();
  };
  useEffect(() => {
    if (hasMenu || !mounted) {
      hasMenu && router.replace(pathname);
      !mounted && setMounted(true);
    }
  }, []);
  useEffect(() => {
    mounted && open !== hasMenu && onOpen?.(hasMenu);
  }, [hasMenu]);
  useEffect(() => {
    mounted && !open && hasMenu && onClose();
  }, [open]);
  return (
    <>
      <Container
        center
        className={cn(
          'w-full justify-between rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500',
          size === SIZE_ENUM.XXS && 'h-4',
          size === SIZE_ENUM.XS && 'h-6',
          size === SIZE_ENUM.SM && 'h-7',
          size === SIZE_ENUM.MD && 'h-8',
          size === SIZE_ENUM.LG && 'h-10',
          size === SIZE_ENUM.XL && 'h-12',
          disable && 'bg-i-light-gray/10',
        )}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          !disable &&
            router.push(createPathQueryString(pathname, { [DROP_DOWN]: id }, searchParams));
        }}
      >
        <Text bold className='truncate'>
          {text ? '' + text : title}
        </Text>
        <IoChevronDown />
      </Container>
      <Modal
        show={open}
        onClose={() => onClose()}
        dialogPanelClassName='h-[100vh] rounded-none md:rounded-none relative gap-2.5'
        panelWrapperClassName='md:p-0'
      >
        {isLoading && (
          <Container center className='absolute inset-0 bg-white/50'>
            <Spinner />
          </Container>
        )}
        <ModalBody className='relative h-full'>{children}</ModalBody>
      </Modal>
    </>
  );
}

export { DropDownItem, DropDownList, DropDownSearch };
