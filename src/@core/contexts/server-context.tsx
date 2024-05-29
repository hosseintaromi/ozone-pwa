import { cache } from 'react';
import 'server-only';

/**
 * Creates a server context with a default value.
 * @param defaultValue The default value for the server context.
 * @returns A tuple of functions: [getValue, setValue].
 */
export default function createServerContext<T>(defaultValue: T): [() => T, (value: T) => void] {
  const getRef = cache(() => ({ current: defaultValue }));

  const getValue = (): T => getRef().current;

  const setValue = (value: T): void => {
    getRef().current = value;
  };

  return [getValue, setValue];
}