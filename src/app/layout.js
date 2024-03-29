import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Korrektify Labs",
  description: "Web accessibility playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
        <main className={styles.main}>{children}</main>
        <footer>
          <p>2024 Korrektify AB</p>
        </footer>
      </body>
    </html>
  );
}
