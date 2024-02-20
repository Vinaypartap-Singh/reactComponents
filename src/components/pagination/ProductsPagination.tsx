import { useState } from "react";
import Pagination from ".";

export default function Products() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Products ${index + 1}`,
  }));

  const itemsPerPage: number = 10;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div>
      <ul>
        {currentListOfItems.map((data) => (
          <li style={{ textAlign: "start", marginTop: 30 }} key={data.id}>
            {data.name}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
