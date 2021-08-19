import { FadeLoader } from "react-spinners";
import { useRepositoryList } from "../../hooks/useRepositoryList";
import styles from './styles.module.scss'

export function Loading() {

    const { isLoading } = useRepositoryList()

    return (
        <div className={styles.container}>
            <FadeLoader color='#008779' loading={isLoading} radius={24}/>
            <p>
                Carregando...
            </p>
        </div>
    )
}