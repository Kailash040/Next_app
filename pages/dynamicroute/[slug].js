import { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h1>Post: {slug}</h1>
}

export default slug