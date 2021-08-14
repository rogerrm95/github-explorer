import { FiSearch } from "react-icons/fi";

import styles from './styles.module.scss'

export function SearchInput() {
    return (
        <div className={styles.searchInput}>
            <label>
                Para começar a utilizar, informe seu nick do Github abaixo:
            </label>

            <input type="text" placeholder='Nome do usuário...' />
            <button><FiSearch size='24' color='white' /></button>
        </div>
    )
}