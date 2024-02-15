import styles from "../page.module.css";
import Image from "next/image";

export default function SemanticHTMLPage() {
  return (
    <>
      <header>
        <h1>Semantics</h1>
      </header>
      <section>
        <Image
          src="/a11y-cowboy1.jpeg"
          alt="A badass cowboy pointing at the viewer with his index finger"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Article Title 1</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={styles.card}>
          <h2>Article Title 2</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={styles.card}>
          <h2>Article Title3</h2>
          <p>This is an example of an article content.</p>
        </article>
        <article className={styles.card}>
          <h2>Article Title4</h2>
          <a href="/">Test test</a>
          <p>This is an example of an article content.</p>
        </article>
      </section>
    </>
  );
}
