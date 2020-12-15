import Head from 'next/head'
import {useEffect} from 'react';
import {default as fetchData} from '../src/fetch';
import {default as Post} from '../components/post';

export default function Home() {
  useEffect(()=>{
    fetchData()
    .then((data)=>{
      console.dir(data);
    })
  },[])
  return (
    <div className="container">
      <Head>
        <title>Cat Social Network</title>
      </Head>
      <h1>Cat Social Network</h1>
      <Post message={"Hello World!"} />
      <style jsx>
        {`font-family: sans-serif`}
      </style>
    </div>)
}
