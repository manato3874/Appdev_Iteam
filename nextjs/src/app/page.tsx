import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Map_iframe from '../../data/iframe.json';
import Opendata from '../../data/opendata.json';
import Maps from '../../data/toilet.json';

const Page = () => {

  return (
    <div>
      <Head>
        <title>トイレの神様</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <p>トイレの神様</p>

        <a href={"/wc/wc"} className={styles.circle_button}>やばいもれそう！！</a>

    </div>
  );
}

export default Page;

