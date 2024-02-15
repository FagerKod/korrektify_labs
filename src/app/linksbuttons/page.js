"use client";
import styles from "../page.module.css";
import Image from "next/image";

export default function LinksButtonsPage() {
  return (
    <>
      <header>
        <h1>Links and buttons</h1>
        <p>Do every button and link have an understandable name?</p>
      </header>
      <section>
        <Image
          src="/a11y_cowboy5_button.jpeg"
          alt="Grim cowboy by fire, wounded, in stark comic style"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.grid_3}>
        <article className={styles.card}>
          <h2>The Good</h2>
          <div className={styles.flex_container_column}>
            <a href="/">click here</a>
            <a href="/">read more</a>
            <button
              onClick={() => {
                alert("huh?!?!");
              }}
            >
              shop
            </button>
          </div>
        </article>
        <article className={styles.card}>
          <h2>The Bad</h2>
          <div className={styles.flex_container_column}>
            <a href="https://hatstore.se/">
              <Image src="/hat_icon.png" alt="" width={48} height={48} />
            </a>
            <button
              onClick={() => {
                alert("WHAAAAAAAT???");
              }}
            >
              <Image src="/horse_icon.png" width={48} height={48} alt="" />
            </button>
          </div>
        </article>
        <article className={styles.card}>
          <h2>The a11y</h2>
          <div className={styles.flex_container_column}>
            <button
              onClick={() => {
                alert("Submitted");
              }}
            >
              Submit form
            </button>
            <button
              onClick={() => {
                alert("Published");
              }}
            >
              Publish content
            </button>
            <button
              onClick={() => {
                alert("Expanded");
              }}
            >
              Expand filters
            </button>
            <a href="//wikipedia.org">Wikipedia</a>
            <a href="/https://hatstore.se/">Visit our hat store</a>
          </div>
        </article>
      </section>
    </>
  );
}
