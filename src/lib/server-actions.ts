'use server';
import { revalidatePath } from 'next/cache';

export async function pathRevalidation(path: string): Promise<void> {
  revalidatePath(path, 'page');
}

//export const idContext = createServerContext('0');
