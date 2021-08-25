import SearchImage from '../../assets/search.png'
import DangerImage from '../../assets/danger.png'

import styles from './styles.module.scss'

export function NoResults() {
    return (
        <div className={styles.noResults}>
                <img src={DangerImage} alt="Atenção"/>
                <img src={SearchImage} alt="Notebook"/>
            <span>Sem resultados !</span>
        </div>
    )
}