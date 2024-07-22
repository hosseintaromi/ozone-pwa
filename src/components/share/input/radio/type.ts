import { RadioGroupProps } from '@headlessui/react/dist/components/radio-group/radio-group';
import type { ElementType } from 'react';

type Props<TTag extends ElementType> = RadioGroupProps<TTag, string | number | null>;
export default Props;
