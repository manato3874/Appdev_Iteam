// src/app/page.tsx
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Page = () => {
  return (
    <div>
      <Head>
        <title>トイレの神様</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <p>トイレの神様</p>

      <Link href="/wc" legacyBehavior>
        <a className={styles.circleButton}>やばいもれそう！！</a>
      </Link>

      <div className={styles.buttonYoko} >
        <Link href="/itiran" legacyBehavior>
          <a className={styles.aoButton}>チャット</a>
        </Link>
        <Link href="/tuti" legacyBehavior>
          <a className={styles.aoButton}>通知</a>
        </Link>
      </div>

      <div className={styles.buttonYoko}>
        <Link href="/login" legacyBehavior>
          <a className={styles.shiroButton}>ログイン</a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className={styles.shiroButton}>設定</a>
        </Link>
      </div>
    </div>
  )
}


export default Page
