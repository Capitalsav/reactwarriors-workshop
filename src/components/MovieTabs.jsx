import React from "react"

const MovieTabs = (props) => {
    const { sort_by, updateSortBy } = props;
    const handleClick = value => {
        return event => {
            updateSortBy(value);
        };
    }

    const getClassLink = value => {
        return `nav-link ${sort_by === value ? "active" : ""}`
    }

    return (
        <div>
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div 
                        className={getClassLink("popularity.desc")}
                        onClick={handleClick("popularity.desc")}
                    >
                        Popularity desc
                    </div>
                </li>
                <li className="nav-item">
                    <div 
                        className={getClassLink("revenue.desc")}
                        onClick={handleClick("revenue.desc")}
                    >
                        Revenue desc
                    </div>
                </li>
                <li className="nav-item">
                    <div 
                        className={getClassLink("vote_average.desc")}
                        onClick={handleClick("vote_average.desc")}
                    >
                        Vote average desc
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MovieTabs;