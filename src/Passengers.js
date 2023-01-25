import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Passengers = () => {
  const rowPerPage = 5; // BENAR
  const [data, setData] = useState([]); // BENAR
  const [currentPage, setCurrentPage] = useState(1); //BENAR
  const [minimumPage, setMinimumPage] = useState(1); //PARTIALLY BENAR, YANG ASLI PAKE 0
  const [maximumPage, setMaximumPage] = useState(rowPerPage); // BENAR

  //   Benar
  useEffect(() => {
    fetch(
      `https://api.instantwebtools.net/v1/passenger?currentPage=${currentPage}&size=${rowPerPage}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("Result ", result);
        setData(result.data);
      });
  }, [currentPage]);

  //   BENAR
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // BENAR
  const handleClickPrevious = () => {
    if (currentPage - 1 < minimumPage) {
      setMinimumPage(minimumPage - rowPerPage);
      setMaximumPage(maximumPage - rowPerPage);
    }
    setCurrentPage(currentPage - 1);
  };

  // BENAR
  const handleClickNext = () => {
    if (currentPage + 1 > maximumPage) {
      setMinimumPage(minimumPage + rowPerPage);
      setMaximumPage(maximumPage + rowPerPage);
    }
    setCurrentPage(currentPage + 1);
  };

  const paginationAttribute = {
    currentPage,
    data,
    minimumPage,
    maximumPage,
  };

  return (
    <div>
      <Pagination
        {...paginationAttribute}
        handleClickNext={handleClickNext}
        handleChangePage={handleChangePage}
        handleClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default Passengers;
