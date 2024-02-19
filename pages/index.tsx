import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href={'/shared'}>shared페이지(6~7주차 과제)</Link>
        <br />
        <Link href={'/folder'}>folder페이지(8주차 과제)</Link>
        <br />
        <Link href={'/inputs'}>input 컴포넌트(13주차 과제)</Link>
      </main>
    </>
  );
}