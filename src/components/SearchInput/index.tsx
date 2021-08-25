import { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";

import styles from './styles.module.scss'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSearch?: (() => Promise<void> )| (() => void)
}

export function SearchInput({ onSearch = () => {}, ...rest }: SearchInputProps) {

    function handleSearchRepositores(key: string){
        if (key === "Enter") onSearch()
    }

    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder='Nome do usuário...' id='search' {...rest} onKeyUp={(e) => handleSearchRepositores(e.key)}/>
            <button onClick={onSearch}>
                <FiSearch size='24' color='white' />
            </button>
        </div>
    )
}