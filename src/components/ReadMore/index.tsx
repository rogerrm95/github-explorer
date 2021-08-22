import { FiRefreshCw } from 'react-icons/fi'
import {useRepositoryList} from '../../hooks/useRepositoryList'


import styles from './styles.module.scss'

export function ReadMore() {

    const {hasMoreRepositories, user, readMore} = useRepositoryList()

    return (
        <>
            {
                hasMoreRepositories ? (
                    <button 
                        className={`${styles.container} ${styles.button}`}
                        onClick={() => readMore(user.repositories)}>
                        Carregar mais <FiRefreshCw size={16} color="#FFF"/>
                    </button >
                ) : (
                    <span className={`${styles.container} ${styles.span}`}>
                        - Fim -
                    </span>
                )
            }
        </>
    )
}