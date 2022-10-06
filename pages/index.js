import Head from 'next/head'
import UIScanner from '../components/UIScanner'
import UITitle from '../components/UITitle'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main_}>

      <Head>
        <title>QR Scanner</title>
      </Head>

      <div className='container'>
        <UITitle />
        <UIScanner />
      </div>
    </main>
  )
}
