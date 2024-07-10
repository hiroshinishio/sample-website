import React from 'react';
import Link from 'next/link';

const Home = () => (
    <div>
        <Link href="/landing"><a>Landing</a></Link>
    </div>
);
export default Home;
import Landing from './landing';
export default function Home() {
  return <Landing />;
}
