import KianComponents from '@/components/app/about/[kian]';
import { metadata as aboutMetadata } from '@/components/app/about/[kian]/meta';

export const metadata = aboutMetadata;
export default async function Kian() {
  return <KianComponents />;
}
