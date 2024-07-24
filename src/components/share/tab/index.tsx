import { Tab as HeadlessUiTab } from '@headlessui/react';

import Panel from './panel';
import Tab from './tab';
import { ListProps, PanelsProps, Props } from './type';

export default function TabGroup({ children, ...props }: Props) {
  return <HeadlessUiTab.Group {...props}>{children}</HeadlessUiTab.Group>;
}

function Tabs({ children, ...props }: ListProps) {
  return <HeadlessUiTab.List {...props}>{children}</HeadlessUiTab.List>;
}

function TabPanels({ children, ...props }: PanelsProps) {
  return <HeadlessUiTab.Panels {...props}>{children}</HeadlessUiTab.Panels>;
}

export { Tab, Panel as TabPanel, TabPanels, Tabs };
