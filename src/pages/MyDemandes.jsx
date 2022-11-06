import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Span,
  Wrapper,
} from "./MyDemandes.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const MyDemandes = () => {
  const [head, setHead] = useState([]);

  useEffect(() => {
    requestDemandes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //runs only on the first render
  async function requestDemandes() {
    const res = await fetch(`http://localhost:3000/demandes`);
    const json = await res.json();
    setHead(json);
  }

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(head.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(head.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, head]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % head.length;
    setItemOffset(newOffset);
  };
  const mobileTab = ["nom", "procedure", "documents", ""];
  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            {mobileTab.map((col) => (
              <Th>{col}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((row) => (
            <Tr>
              <Td>{row.nom}</Td>
              <Td>{row.procedure}</Td>
              <Td>
                {row.documents.map(
                  (element) =>
                    "Doc: " +
                    element.substring(0, 3) +
                    "..." +
                    element.slice(-4) +
                    ";  "
                )}
              </Td>
              <Td>
                <Link to={`/modifyDemande/${row._id}`}>
                  <HiPencilAlt color="#49be25" size="25px" />
                </Link>
                <span> </span>
                <Link to="/">
                  <AiFillDelete color="red" size="25px" />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Wrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<BsFillArrowRightCircleFill color="#308efe" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<BsFillArrowLeftCircleFill color="#308efe" />}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </Wrapper>
    </div>
  );
};

export default MyDemandes;
