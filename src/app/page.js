import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1>The good, the bad and the a11y</h1>
        <p>Low hanging fruit in web accessibility</p>
      </header>
      <section>
        <Image
          src="/a11y_cowboys2.jpeg"
          alt="Two male and one female cowboy walk away from a tree, in a gritty black and white style."
          width={500}
          height={500}
          priority
        />
      </section>

      <section>
        <article className={styles.grid}>
          <div className={styles.card}>
            <Link href="/contrasts">
              <h2>Contrasts</h2>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/alttext">
              <h2>Alternative text</h2>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/linksbuttons">
              <h2>Links and buttons</h2>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/labels">
              <h2>Form labels</h2>
            </Link>
          </div>
        </article>

        <article className={styles.grid}>
          <div className={styles.card}>
            <Link href="/keyboard">
              <h2>Keyboard navigation</h2>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/responsive">
              <h2>Responsive design</h2>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
