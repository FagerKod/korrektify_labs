import styles from "../page.module.css";
import contrastStyles from "./page.module.css";
import Image from "next/image";

export default function ContrastsPage() {
  return (
    <>
      <header>
        <h1>Contrasts</h1>
        <p>
          Do the text and background colors meet the minimum contrast ratio?
        </p>
      </header>
      <section>
        <Image
          src="/a11y_cowboy9_contrast.jpeg"
          alt="female cowboy merges with gritty background, barely visible in a low contrast western style"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.grid}>
        <article className={`${styles.card} ${contrastStyles.card1}`}>
          <h2>Article Title 1</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={`${styles.card} ${contrastStyles.card2}`}>
          <h2>Article Title 2</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={`${styles.card} ${contrastStyles.card3}`}>
          <h2>Article Title3</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={`${styles.card} ${contrastStyles.card4}`}>
          <h2>Article Title4</h2>
          <p>This is an example of an article content.</p>
        </article>
      </section>
    </>
  );
}
