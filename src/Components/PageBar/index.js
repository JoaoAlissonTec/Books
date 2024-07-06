import PageButton from "./PageButton";

export default function PageBar({totalPages, currentPage, handlePageChange}){
    return <div className="flex gap-3">
        {
            Array.from({length: totalPages}, (_, index) => index + 1).map(page => <PageButton key={page} page={page} onClick={handlePageChange} isActive={page === currentPage}/>)
        }
    </div>
}