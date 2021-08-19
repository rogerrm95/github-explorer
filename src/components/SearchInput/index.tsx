import { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";

import styles from './styles.module.scss'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleSearchUser?: (() => Promise<void> )| (() => void)
}

export function SearchInput({ handleSearchUser, ...rest }: SearchInputProps) {
    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder='Nome do usuário...' id='search' {...rest} />
            <button onClick={handleSearchUser}>
                <FiSearch size='24' color='white' />
            </button>
        </div>
    )
}