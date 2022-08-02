/** @jsxImportSource @emotion/react */

import {
    paginationContainer,
    paginationPrevButton,
    paginationNextButton,
    paginationSelect,
    paginationText
} from "./styles";

const Pagination = (props) => {
    const {
        currentPage,
        totalData,
        pageSize,
        lastPage,
        onPageChange
    } = props;

    const totalPage = Math.ceil(totalData / pageSize);

    const range = () => {
        return Array(lastPage).fill().map((_, idx) => idx + 1);
    }

    const onPrev = () => {
        onPageChange(parseInt(currentPage) - 1);
    }

    const onNext = () => {
        onPageChange(parseInt(currentPage) + 1);
    };
    
    const onSelectChange =(e) => {
        onPageChange(e.target.value);
    }

    return(
        <div css={paginationContainer}>
            <p css={paginationText}>Page {currentPage} of {totalPage}</p>
            <button css={paginationPrevButton} onClick={onPrev} disabled={currentPage === 1}>Prev</button>
            <button css={paginationNextButton} onClick={onNext} disabled={currentPage === lastPage}>Next</button>
            <select css={paginationSelect} value={currentPage} onChange={onSelectChange}>
                {range().map((r) => {
                    return(
                        <option value={r}>{r}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Pagination;