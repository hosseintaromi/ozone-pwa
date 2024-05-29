import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import cn from '@/lib/clsxm';

import ModalAction from '@/components/@base/modal/action';
import ModalBody from '@/components/@base/modal/body';
import ModalHead from '@/components/@base/modal/head';
import { Props } from '@/components/@base/modal/type';

export default function Modal({
  onClose,
  show = false,
  noBackDrop = false,
  center = false,
  children,
  dialogProps,
  className,
  dialogPanelProps,
  dialogPanelClassName,
  panelWrapperClassName,
}: Props) {
  const { className: dialogClassName, ...otherDialogProps } = dialogProps || {};
  const { className: otherDialogPanelClassName, ...otherDialogPanelProps } =
    dialogPanelProps || {};
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as='div'
        className={cn('relative z-[100]', dialogClassName, className)}
        onClose={() => onClose?.()}
        {...otherDialogProps}
      >
        {!noBackDrop && (
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' onClick={(e) => e.preventDefault()} />
          </Transition.Child>
        )}

        <div className='fixed inset-0 overflow-y-auto'>
          <div
            className={cn(
              'flex min-h-full items-end justify-center text-center md:items-center md:p-4',
              center && 'items-center',
              panelWrapperClassName,
            )}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel
                className={cn(
                  'w-full max-w-md overflow-hidden rounded-t-2xl bg-white p-4 text-left align-middle shadow-xl md:rounded-2xl md:p-6',
                  center && 'w-80 rounded-2xl',
                  otherDialogPanelClassName,
                  dialogPanelClassName,
                )}
                {...otherDialogPanelProps}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export { ModalAction, ModalBody, ModalHead };
