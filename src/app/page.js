"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Calculate from "./calculator/calculator.js";
import InfoCard from "./components/InfoCard";
import { usePathname } from 'next/navigation';
import RegistrationForm from "./components/RegistrationForm";

function Greeting(props) {
  return <h1 className={styles.greeting}>Hello, {props.name}!</h1>;
}

function ClickExample() {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  return <button className={styles.button} onClick={handleClick}>Click Me</button>;
}

export default function Home() {
  const [counter, setCounter] = useState(0);
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Greeting name="React" /> {/* ここで指定した値がGreetingに渡る */}
      <div>
        <p className={styles.counter}>カウンター: {counter}</p>
        <button className={styles.button} onClick={() => setCounter(counter + 1)}>カウントアップ</button>
      </div>
      <ClickExample/>

      <Calculate/>

      <InfoCard
        title="サンプルタイトル"
        description="説明文のサンプルです。"
      />

      <RegistrationForm />

      <nav style={{marginTop: "2rem"}}>
        <ul style={{listStyle: "none", display: "flex", gap: "1rem"}}>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>ホーム</Link> {/* linkではなくLink */}
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? styles.active : ""}>アバウト</Link>
          </li>
          <li>
            <Link href="/portfolio" className={pathname === "/portfolio" ? styles.active : ""}>ポートフォリオ</Link>
          </li>
          <li>
            <Link href="/blog" className={pathname === "/blog" ? styles.active : ""}>投稿</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

