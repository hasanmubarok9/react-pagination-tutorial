import "./pagination.css";

const Pagination = (props) => {
  const {
    currentPage,
    data,
    handleClickNext,
    handleClickPrevious,
    handleChangePage,
    minimumPage,
    maximumPage,
  } = props;

  // ellipsis decrement
  let decrementEllipsis = null;
  if (minimumPage > 5) {
    decrementEllipsis = <li>&hellip;</li>;
  }

  // ellipsis increment
  let incrementEllipsis = null;
  if (maximumPage < 10100) {
    incrementEllipsis = <li>&hellip;</li>;
  }

  //   pages
  const pages = [];
  for (let i = minimumPage; i <= maximumPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul>
        {data.map(({ _id: id, name, trips }) => (
          <li key={id}>
            {name} {trips} {id}
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <ul className="pageNumbers">
        <button disabled={currentPage === 1} onClick={handleClickPrevious}>
          Prev
        </button>
        {decrementEllipsis}
        {pages.map((page) => (
          <li
            className={`${page === currentPage ? "active" : ""}`}
            key={page}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </li>
        ))}
        {incrementEllipsis}
        <button disabled={false} onClick={handleClickNext}>
          Next
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
