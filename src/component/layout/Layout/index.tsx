import Header from '@layout/Header'
import Banner from '@layout/Banner'
import styles from './Layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <main>{children}</main>
    </div>
  )
}
