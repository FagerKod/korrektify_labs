import styles from "../page.module.css";
import Image from "next/image";

export default function LabelsPage() {
  return (
    <>
      <header>
        <h1>Form labels</h1>
        <p>Do all inputs have an associated label?</p>
      </header>
      <section>
        <Image
          src="/a11y_cowboy6_labels.jpeg"
          alt="Tired female cowboy reads jam jar label, in stark black and white western comic style"
          width={500}
          height={500}
          priority
        />
      </section>
      <section className={styles.grid_2}>
        <article className={styles.card}>
          <div className={styles.flex_container_column}>
            <label style={{ fontSize: 24, fontWeight: 600 }}>The Bad</label>
            <label>First name:</label>
            <input type="text" name="first-name" id="firstName" />
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.flex_container_column}>
            <h2>The a11y</h2>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="last-name" id="lastName" />
          </div>
        </article>
      </section>
    </>
  );
}
