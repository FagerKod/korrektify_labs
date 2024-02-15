import styles from "../page.module.css";
import Image from "next/image";

export default function ResponsivePage() {
  return (
    <>
      <header>
        <h1>Responsive design</h1>
        <p>
          Does the website content reflow gracefully and remain usable on
          different screen sizes?
        </p>
      </header>
      <section>
        <Image
          src="/a11y_cowboy8_responsive.jpeg"
          alt="Cowboy too large for comic panel looks confused, breaking frame in a black and white western"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.flex_container}>
        <article className={styles.card}>
          <h2>Cowboy Card 1</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={styles.card}>
          <h2>Cowboy Card 2</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={styles.card}>
          <h2>Cowboy Card 3</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={styles.card}>
          <h2>Cowboy Card 4</h2>
          <p>This is an example of an article content.</p>
        </article>
      </section>
    </>
  );
}
