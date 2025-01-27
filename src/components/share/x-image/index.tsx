import Image from 'next/image';

import Props from './type';

const placeHolderImage = (width, height) => `
<svg width="${width}" height="${height}" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18029_91346)">
<path d="M44.4929 49.0071C42.7483 49.0071 41.2813 47.5865 41.2813 45.8503C41.2813 44.0746 42.7087 42.654 44.4532 42.654C51.154 42.6146 57.0617 39.0237 60.2733 33.0258C63.4849 27.0673 63.2074 20.1223 59.52 14.519C56.1498 9.1919 50.2817 6.11402 43.7792 6.27186C37.2767 6.4297 31.5672 9.74435 28.4349 15.1504C27.5626 16.6893 25.5801 17.2023 24.0734 16.3342C22.5271 15.4661 22.0117 13.4931 22.884 11.9936C27.1264 4.61454 34.8977 0.116091 43.6602 -0.0812088C52.4228 -0.278509 60.3526 3.90426 64.952 11.0465C69.9478 18.6623 70.3046 28.0143 65.9828 36.0642C61.7007 44.0351 53.4536 49.0071 44.5325 49.086L44.4929 49.0071Z" fill="#24c8b050"/>
<path d="M44.4928 49.0075C42.7483 49.0075 41.2812 47.5869 41.2812 45.8506C41.2812 44.0749 42.7086 42.6544 44.4532 42.6544C51.1539 42.6149 57.0617 39.0241 60.2733 33.0261C63.4849 27.0677 63.2073 20.1227 59.52 14.5194C62.1765 13.0988 62.9298 12.3491 64.9123 11.0469C69.9081 18.6627 70.2649 28.0147 65.9432 36.0646C61.661 44.0355 53.4139 49.0074 44.4928 49.0864V49.0075Z" fill="url(#paint1_linear_18029_91346)"/>
<path d="M22.6507 33.3418C23.523 31.8423 25.4658 31.2899 27.0122 32.158C28.5585 33.0261 29.0739 34.9596 28.2016 36.4986C24.9107 42.2992 25.0693 49.1653 28.6774 54.9659C32.2459 60.7271 38.4312 63.9628 45.1716 63.5682H45.2112C51.4758 63.292 57.106 59.78 60.2383 54.0978C63.3706 48.4155 63.331 41.8257 60.1987 36.4197C59.3264 34.8807 59.8418 32.9472 61.3485 32.0396C62.8948 31.1715 64.8377 31.6845 65.7496 33.1839C70.0317 40.5235 70.0714 49.4809 65.8685 57.1362C61.6657 64.752 54.053 69.5661 45.5284 69.9213C36.4091 70.4342 28.0827 66.0542 23.2455 58.2805C18.4479 50.5858 18.2496 41.0365 22.6507 33.3023V33.3418Z" fill="#24c8b050"/>
<path d="M22.6513 33.3424C23.5236 31.843 25.4664 31.2905 27.0128 32.1586C28.5591 33.0268 29.0745 34.9603 28.2022 36.4992C24.9113 42.2999 25.0699 49.1659 28.678 54.9666C32.2465 60.7277 38.4318 63.9635 45.1722 63.5689H45.2118C45.0532 66.5678 45.3704 67.5938 45.4893 69.9614C36.37 70.4744 28.0436 66.0943 23.2064 58.3207C18.4088 50.626 18.2106 41.0766 22.6117 33.3424H22.6513Z" fill="url(#paint3_linear_18029_91346)"/>
<path d="M46.9133 22.2928C47.7856 23.7923 47.2701 25.7653 45.7635 26.6334C44.2171 27.541 42.2743 27.028 41.3624 25.4891C37.9922 19.7674 31.8862 16.4528 25.0665 16.6501C18.2468 16.8474 12.3787 20.5566 9.32567 26.5545C6.43127 32.1579 6.66917 38.7477 10.079 44.2721C13.4492 49.7965 19.1984 53.0717 25.5026 53.0717C27.2869 53.0717 28.7142 54.4922 28.7142 56.2679C28.7142 58.0436 27.2869 59.4642 25.5026 59.4642C16.978 59.4642 9.16709 55.0447 4.60741 47.5867C0.0873839 40.1288 -0.30912 31.2108 3.65582 23.6739C7.77935 15.5846 15.7092 10.5732 24.9079 10.297C33.9876 10.0208 42.4329 14.5981 46.9529 22.2928H46.9133Z" fill="#24c8b050"/>
<path d="M46.9143 22.2928C47.7866 23.7923 47.2711 25.7653 45.7645 26.6334C44.2181 27.541 42.2753 27.0281 41.3634 25.4891C37.9932 19.7674 31.8872 16.4528 25.0675 16.6501C18.2478 16.8474 12.3797 20.5566 9.32668 26.5545C6.78912 24.9761 5.75825 24.7394 3.61719 23.6739C7.74072 15.5846 15.6706 10.5732 24.8692 10.297C33.9489 10.0208 42.3943 14.5981 46.9143 22.2928Z" fill="url(#paint5_linear_18029_91346)"/>
</g>
<defs>
<radialGradient id="paint0_radial_18029_91346" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.0559 13.493) scale(48.0947 47.865)">
<stop stop-color="#24C8B0" stop-opacity="0"/>
<stop offset="1" stop-color="#24C8B0"/>
</radialGradient>
<linearGradient id="paint1_linear_18029_91346" x1="60.5508" y1="10.5339" x2="52.8112" y2="47.6018" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stop-color="#24C8B0" stop-opacity="0"/>
<stop offset="1" stop-color="#24C8B0"/>
</linearGradient>
<radialGradient id="paint2_radial_18029_91346" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.7884 35.1751) rotate(120.119) scale(47.9226 48.037)">
<stop stop-color="#24C8B0" stop-opacity="0"/>
<stop offset="1" stop-color="#24C8B0"/>
</radialGradient>
<linearGradient id="paint3_linear_18029_91346" x1="48.1511" y1="66.4061" x2="19.9346" y2="41.0133" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stop-color="#24C8B0" stop-opacity="0"/>
<stop offset="1" stop-color="#24C8B0"/>
</linearGradient>
<radialGradient id="paint4_radial_18029_91346" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25.199 55.9665) rotate(-120.119) scale(47.9226 48.037)">
<stop stop-color="#24C8B0" stop-opacity="0"/>
<stop offset="1" stop-color="#24C8B0"/>
</radialGradient>
<linearGradient id="paint5_linear_18029_91346" x1="5.37726" y1="27.7154" x2="41.4918" y2="15.8187" gradientUnits="userSpaceOnUse">
<stop offset="0.1" stop-color="#24C8B0" stop-opacity="0"/>
<stop offset="1" stop-color="#24C8B0"/>
</linearGradient>
<clipPath id="clip0_18029_91346">
<rect width="70" height="70" fill="white"/>
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
