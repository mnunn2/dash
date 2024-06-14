import { Inter, Shadows_Into_Light, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const shadowsIntoLight = Shadows_Into_Light({
  subsets: ['latin'],
  weight: '400',
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
