import { TabProps } from '@headlessui/react';
import type { ElementType } from 'react';

type Props<TTag extends ElementType> = object & TabProps<TTag>;
export default Props;
