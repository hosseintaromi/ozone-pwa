import { useState } from 'react';

import { Input } from '@/components/@base/input';
import Props from '@/components/shared/components/debounce-input/type';
let timeoutId: NodeJS.Timeout;
export default function DebounceInput({
  onChange,
  debounce = 300,
  initialValue,
  ...props
}: Props) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (value: string) => {
    setValue(value);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      onChange(value);
    }, debounce);
  };

  return <Input value={value} onChange={(e) => handleChange(e.target.value)} {...props} />;
}
