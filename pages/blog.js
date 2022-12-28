import React from 'react'

const blog = (props) => {
    console.log(props)
  return (
    <div>blog</div>
  )
}
  
  export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")   
    const data = await  res.json();
  
    return{
        props:{data}
    }
     }
export default blog