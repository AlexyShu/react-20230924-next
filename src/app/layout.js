import {Header} from "@/components/Header/component";
import {Footer} from "@/components/Footer/component";
import styles from "./styles.module.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header className={styles.header} />
        <main>{children}</main>
      <Footer className={styles.footer} />
      </body>
    </html>
  )
}
