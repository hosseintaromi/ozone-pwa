'use client';
import { useLayoutEffect } from 'react';

export default function DisableZoom() {
  useLayoutEffect(() => {
    document.addEventListener('gesturestart', function (e: Event) {
      e.preventDefault();
      //@ts-ignore
      document.body.style.zoom = 0.99;
    });

    document.addEventListener('gesturechange', function (e: Event) {
      e.preventDefault();
      //@ts-ignore
      document.body.style.zoom = 0.99;
    });
    document.addEventListener('gestureend', function (e: Event) {
      e.preventDefault();
      //@ts-ignore
      document.body.style.zoom = 1;
    });
  }, []);
  return null;
}
