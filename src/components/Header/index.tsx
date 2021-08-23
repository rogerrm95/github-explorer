import { Link, useHistory, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import styles from './styles.module.scss'

type HeaderProps = {
    link?: string
}

export function Header({ link = '' }: HeaderProps) {
    const { goBack } = useHistory()
    const { pathname } = useLocation()

    return (
        <header className={styles.container}>
            <Link to={link}>
                <img src={Logo} alt="Logo" />
                {
                    pathname !== '/' &&  <FiArrowLeft size={24} color="#008779" onClick={goBack} />
                }
            </Link>

            <h1>
                Git<strong>hub </strong>
                Explorer<strong>.</strong>
            </h1>
        </header>
    )
}