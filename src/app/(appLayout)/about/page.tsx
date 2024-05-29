import AboutComponents from '@/components/app/about';
import { metadata as aboutMetadata } from '@/components/app/about/meta';

export const metadata = aboutMetadata;
export default async function About() {
  return <AboutComponents />;
}
