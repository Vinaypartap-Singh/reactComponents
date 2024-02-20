interface propsType {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages = 5,
  onPageChange,
}: propsType) {
  const generateNumberOfPages = () => {
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      {generateNumberOfPages().map((pageNo) => (
        <button key={pageNo} onClick={() => onPageChange(pageNo)}>
          {pageNo}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
}
