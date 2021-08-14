import { Link } from "react-router-dom";

import { Header } from '../components/Header'

import styles from "../styles/home.module.scss"

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.content}>
                Main
            </main>
        </div>
    )
}