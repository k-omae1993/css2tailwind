import Image from 'next/image';
import Link from 'next/link';
import DemoImage from '~/img/demo.png';

export default function Home() {
  return (
    <div className='h-screen w-screen bg-gray-300 py-80'>
      <h2 className='flex items-center justify-center gap-1 text-5xl font-semibold tracking-wider text-gray-600'>
        <span>CSS</span>
        <span className=' mx-2 text-7xl'>2</span>
        <span>TailwindCSS</span>
      </h2>
      <Image src={DemoImage} alt='' width={1200} height={400} className='mx-auto my-8 rounded-md' />
      <div className='text-center'>
        <Link href='/transformation'>
          <button className='rounded bg-sky-600 px-3 py-2 text-2xl  tracking-wider text-white hover:opacity-75'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
