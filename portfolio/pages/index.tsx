import LeftSide from '@/components/LeftSide';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
    <title>Create Next App</title>
      <meta name="description" content="Generated by create next app"/>
      <meta name="viewport" content="width=device-width, initial-scale-1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overscroll-y-scroll'>
      <Navbar />
      <div>
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </div>
          <div>Middle</div>
          <div>
            <RightSide />
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
