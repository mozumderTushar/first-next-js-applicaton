import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Js | Home</title>
        <meta name="keywords" content="next" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum unde, architecto impedit tempore reprehenderit nesciunt illum autem. Cum, saepe assumenda aliquam et optio fuga quidem possimus cumque enim iure eveniet?</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum unde, architecto impedit tempore reprehenderit nesciunt illum autem. Cum, saepe assumenda aliquam et optio fuga quidem possimus cumque enim iure eveniet?</p>
        <Link href="/list">
          <a className={styles.btn}>See Listing</a>
        </Link>
      </div>
    </>
  )
}
