import OzoneComponents from '@/components/app/about/[ozone]';
import { metadata as aboutMetadata } from '@/components/app/about/[ozone]/meta';

export const metadata = aboutMetadata;
export default async function Ozone() {
  return <OzoneComponents />;
}
