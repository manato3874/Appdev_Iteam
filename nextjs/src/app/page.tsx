import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import iframData from '../../data/iframe.json'
import Opendata from '../../data/opendata.json'
 
const Page = () => {
  const [iframData, setiframData] = useState(iframData)
  const [opendataData, setOpendataData] = useState(Opendata)
 
  return (
    <div>
      <Head>
        <title>トイレの神様</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <p>トイレの神様</p>
 
      <Link href="/index" legacyBehavior onClick={() => {
        function check(){
          console.log("チェック");
        }
        check();
      }}>
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
 
      <div>
        <ul>
          {iframData.map((data, index) => (
            <li key={index}>
              <p>{data.施設名}</p>
              <p>{data.都道府県} {data.市区町村} {data.番地}</p>
              <p>
                <iframe src={data.Map} width="500" height="400"></iframe>
              </p>
            </li>
          ))}
        </ul>
      </div>
 
      <div>
        <ul>
          {opendataData.map((data, index) => (
            <li key={index}>
              <p>{data.施設名}</p>
              <p>{data.都道府県} {data.市区町村} {data.番地}</p>
              <p>
                <iframe src={data.Map} width="500" height="400"></iframe>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
 
export default Page