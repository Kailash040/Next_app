import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  
  return (
  <>
  
  <nav className={styles.navbar}>
        <ul>
          <li>
          <Link href="/">Home</Link>
           </li>
          <li>
            
          <Link href="/about">About</Link></li>
          <li>

          <Link href="/service">Service</Link>
          </li>
          <li>
          <Link href="/contact"> Contact</Link>
            </li>
        </ul>
      </nav>
    <Component {...pageProps} />
  </>
    )
}

export default MyApp
