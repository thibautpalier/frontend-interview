import Link from "next/link";

import "@/styles/constants.css";
import "@/styles/globals.css";

import styles from "./styles.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.container}>
            <Link href="/">
              <h1>Welcome to Apiday !</h1>
            </Link>
          </div>
        </header>
        <main className={`${styles.container} ${styles.content}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
