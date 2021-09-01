import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout
      title="ホームページタイトル"
      description="ホームページ概要"
    >
      <p>ホームページコンテンツ</p>
    </Layout>
  )
}