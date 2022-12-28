import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
export default function Home(props) {
  console.log(props)
  const [item,setItem]=useState(props.data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Next js tut</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* Script tag can add to this line */}
      </Head>
     
  
    </div>
  )
}
// This gets called on every request
 
// export async function getServerSideProps(){

// }