import Logo from '../assets/logo.svg'

import styles from './styles.module.scss'

export function Header(){
    return(
        <header className={styles.container}>
            <img src={Logo} alt="Logo" />

            <h1>
                Git<strong>hub</strong>
                Explorer<strong>.</strong>
            </h1>
        </header>
    )
}