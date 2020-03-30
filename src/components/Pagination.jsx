import React from "react"

const Pagination = (props) => {
    return (
        <div className="row">
            <div className="col-3">
                <nav aria-label="Page navigation example">
                    <ul className="pagination pagination-sm">
                        <li className="page-item"><button className="page-link" onClick={props.prevPage}>Previous</button></li>
                        <li className="page-item"><button className="page-link" onClick={props.nextPage}>Next</button></li>
                    </ul>
                </nav>
            </div>
            <div className="col-3">
                <p>Current page: {props.currentPage}</p>
            </div>
            <div className="col-3">
                <div className="row">Total pages: {props.totalPages}</div>
            </div>
        </div>
    )
}

export default Pagination;