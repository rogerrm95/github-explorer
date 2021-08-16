import SearchImage from '../../assets/search.png'
import DangerImage from '../../assets/danger.png'

import styles from './styles.module.scss'

export function NoResults() {
    return (
        <div className={styles.noResults}>
                <img src={SearchImage} alt="Notebook" id='notebook' />
                <img src={DangerImage} alt="Atenção" id='danger' />
            <span>Sem resultados !</span>
        </div>
    )
}