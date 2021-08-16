import { FiSearch } from "react-icons/fi";

import styles from './styles.module.scss'

export function SearchInput() {
    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder='Nome do usuário...' id='search'/>
            <button><FiSearch size='24' color='white' /></button>
        </div>
    )
}