"use client";
import Link from "next/link";
import styles from "../page.module.css";
import stylesKeyboard from "./page.module.css";
import Image from "next/image";

export default function SemanticHTMLPage() {
  return (
    <>
      <header>
        <h1>Keyboard navigation</h1>
        <p>
          Can users navigate and interact with all interactive elements using
          only the keyboard?
        </p>
      </header>
      <section>
        <Image
          src="/a11y_cowboy7_keyboard.jpeg"
          alt="Harrowed female cowboy navigates by stars with map, in a stark black and white western comic style"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.grid_3}>
        <article className={styles.card}>
          <div className={styles.flex_container_column}>
            <h2>Avoid</h2>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="last-name" id="lastName" />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.flex_container_column}>
            <h2>using</h2>
            <button
              tabIndex="-1"
              onClick={() => {
                alert("Alerted!");
              }}
            >
              Open alert
            </button>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.flex_container_column}>
            <h2>tabIndex</h2>
            <Link tabIndex="1" href="/">
              Link to Home
            </Link>
          </div>
        </article>
      </section>
      <section className={styles.grid_2}>
        <article>
          <form action="">
            <fieldset className={stylesKeyboard.fieldset}>
              <legend style={{ fontSize: 24, fontWeight: 600 }}>
                Choose your favorite low hanging fruit:
              </legend>
              <div className={stylesKeyboard.input_container}>
                <input
                  className={stylesKeyboard.radio}
                  type="radio"
                  id="contrast"
                  name="fruit"
                  value="contrast"
                />
                <label for="contrast">Contrasts</label>
              </div>
              <div className={stylesKeyboard.input_container}>
                <input
                  className={stylesKeyboard.radio}
                  type="radio"
                  id="altText"
                  name="fruit"
                  value="altText"
                />
                <label for="banana">Alternative text</label>
              </div>
              <div className={stylesKeyboard.input_container}>
                <input
                  className={stylesKeyboard.radio}
                  type="radio"
                  id="links"
                  name="fruit"
                  value="links"
                />
                <label for="orange">Links and buttons</label>
              </div>
            </fieldset>
            <button
              onClick={() => {
                alert("Submitted");
              }}
            >
              Submit fruit
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
