import { CssToTailwindTranslator } from 'css-to-tailwind-translator';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const cssCode = `.test {
  width: 100%;
  height: 50%;
  margin: 0 !important;
  background-color: transparent;
}
`;

  const conversionResult = CssToTailwindTranslator(cssCode);

  console.log(conversionResult);
  return (
    <div className='text-ellipsis py-3  pt-8 font-bold'>{conversionResult.data[0].resultVal}</div>
  );
}
