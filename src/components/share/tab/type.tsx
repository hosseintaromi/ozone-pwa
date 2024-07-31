import { TabGroupProps, TabListProps, TabPanelsProps } from '@headlessui/react';
import React from 'react';

type Props = TabGroupProps<
  React.ExoticComponent<{
    children?: React.ReactNode;
  }>
>;

type ListProps = TabListProps<'div'>;
type PanelsProps = TabPanelsProps<'div'>;

export type { ListProps, PanelsProps, Props };
