import styles from "../page.module.css";

import Image from "next/image";

export default function AltTextPage() {
  return (
    <>
      <header>
        <h1>Alternative texts</h1>
        <p>
          Do every image have a meaningful alternative text that conveys its
          purpose or content?
        </p>
      </header>
      <section>
        <Image
          src="/a11y_cowboy4_alt1.jpeg"
          alt="Cowboy in black and white reads a book with worn pages, face lit by two cigarettes' glow"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.grid_3}>
        <div
          style={{ position: "relative", height: 300 }}
          className={styles.card}
        >
          <Image
            src="/a11y_cowboy4_alt1.jpeg"
            alt="horses on book"
            fill
            priority
          />
        </div>
        <div
          style={{ position: "relative", height: 300 }}
          className={styles.card}
        >
          <Image
            src="/a11y_cowboy4_alt1.jpeg"
            alt="money earn billionaire dollars free gift facebook seo important trustworthy rich treasure gold membership news AI"
            fill
            priority
          />
        </div>
        <div
          style={{ position: "relative", height: 300 }}
          className={styles.card}
        >
          <Image src="/a11y_cowboy4_alt1.jpeg" alt=" " fill priority />
        </div>
      </section>
    </>
  );
}
