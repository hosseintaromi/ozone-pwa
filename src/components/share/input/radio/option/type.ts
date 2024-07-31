import { RadioOptionProps } from '@headlessui/react/dist/components/radio-group/radio-group';
import type { ElementType } from 'react';

type Props<TTag extends ElementType> = RadioOptionProps<TTag, string | number>;
export default Props;
