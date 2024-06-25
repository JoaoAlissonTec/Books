import PageButton from "../PageButton";
import styles from './styles.module.css'

export default function PageBar({totalPages, currentPage, handlePageChange}){
    return <div className={styles.page_bar}>
        {
            Array.from({length: totalPages}, (_, index) => index + 1).map(page => <PageButton page={page} onClick={handlePageChange} isActive={page === currentPage}/>)
        }
    </div>
}