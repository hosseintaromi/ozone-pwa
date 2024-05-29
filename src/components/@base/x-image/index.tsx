import Image from 'next/image';

import Props from '@/components/@base/x-image/type';

const placeHolderImage = (
  width,
  height,
) => `<svg width="${width}" height="${height}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2521_219)">
<mask id="mask0_2521_219" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
<path d="M44 0H4C1.79086 0 0 1.79086 0 4V44C0 46.2091 1.79086 48 4 48H44C46.2091 48 48 46.2091 48 44V4C48 1.79086 46.2091 0 44 0Z" fill="white"/>
</mask>
<g mask="url(#mask0_2521_219)">
<path d="M22.5442 21.6845H15.585C15.5008 21.6844 15.4174 21.7013 15.3398 21.7342C15.2622 21.7671 15.1921 21.8153 15.1335 21.8759C15.0749 21.9365 15.0291 22.0083 14.9989 22.087C14.9686 22.1657 14.9545 22.2497 14.9573 22.334C15.1221 27.43 17.2181 32.2724 20.8199 35.8783C24.4217 39.4842 29.2593 41.5833 34.351 41.7496C34.4352 41.7525 34.5191 41.7384 34.5977 41.7081C34.6764 41.6778 34.7481 41.632 34.8087 41.5734C34.8692 41.5147 34.9173 41.4445 34.9502 41.3669C34.9831 41.2892 35 41.2058 34.9999 41.1215V32.339C34.9978 32.1789 34.9362 32.0252 34.827 31.9081C34.7179 31.791 34.569 31.7187 34.4095 31.7055C32.223 31.5776 30.1384 30.7372 28.4737 29.3127C26.809 27.8881 25.6557 25.9576 25.1896 23.8157C25.0572 23.212 24.7227 22.6717 24.2417 22.2842C23.7606 21.8966 23.1618 21.685 22.5442 21.6845Z" fill="url(#paint0_linear_2521_219)"/>
<path d="M19.9556 19.1716C23.2448 19.1716 25.9113 16.5029 25.9113 13.2108C25.9113 9.91875 23.2448 7.25 19.9556 7.25C16.6663 7.25 13.9999 9.91875 13.9999 13.2108C13.9999 16.5029 16.6663 19.1716 19.9556 19.1716Z" fill="url(#paint1_linear_2521_219)"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_2521_219" x1="23.9919" y1="52.1773" x2="23.9919" y2="-15.7749" gradientUnits="userSpaceOnUse">
<stop stop-color="#A6A6A6"/>
<stop offset="1" stop-color="#C5C5C5"/>
</linearGradient>
<linearGradient id="paint1_linear_2521_219" x1="889.962" y1="2881.08" x2="889.962" y2="945.96" gradientUnits="userSpaceOnUse">
<stop stop-color="#878787"/>
<stop offset="1" stop-color="#B5B5B5"/>
</linearGradient>
<clipPath id="clip0_2521_219">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
export default function XImage({ blur = false, alt, placeholder, ...props }: Props) {
  return (
    <Image
      alt={alt}
      blurDataURL={
        blur
          ? 'data:banner-image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPAA8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDn9dvI7C7aNGAIOKzJdfu9v7iRvwNcf4o1Q3msSSxs21jml0/WI7ZczZI+mah1ata05O3kdVKnRoKVO1/M/9k='
          : undefined
      }
      placeholder={
        blur
          ? 'blur'
          : placeholder
            ? `data:image/svg+xml;base64,${toBase64(placeHolderImage(props?.width || 48, props?.height || 48))}`
            : undefined
      }
      {...props}
    />
  );
}
