import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import React ,{useState} from 'react'
export default function Home(props) {
  const [userData,setUserData] =useState(props.jsonData)
  console.log(userData)
  return (
    <div className={styles.container}>
     
 {userData && userData.length  ? userData.map((data)=>{
    return  <div>
    <h1>{data.name}</h1>
    <p>{data.email}</p>
     </div>
 }):null}

      
  
   
    </div>
  )
}
export async function getServerSideProps(){
  const data =await fetch ("https://jsonplaceholder.typicode.com/users")
  const jsonData =await data.json();
  console.log(jsonData);
  return{
    props:{jsonData},

  }
}