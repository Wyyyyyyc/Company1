import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>某某公司</div>
      <nav>
        <Link href="/">首页</Link>
        <Link href="/about">关于我们</Link>
        <Link href="/products">产品中心</Link>
        <Link href="/news">新闻资讯</Link>
        <Link href="/contact">联系我们</Link>
      </nav>
    </header>
  )
}
