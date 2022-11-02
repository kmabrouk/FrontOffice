import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Span,
    Wrapper,
  } from "./blank.style";
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
const Blank = () => {
    
    const head = [
            {
                "_id": "6362adfa93115709036400fc",
                "nom": "Demande d'acte de naissance",
                "procedure": "Naissance",
                "procedureId": "6362abf1a786444a8dea2b49",
                "__v": 0
            },
            {
                "_id": "6362ae0693115709036400fe",
                "nom": "Demande d'acte de mariage",
                "procedure": "Mariage",
                "procedureId": "6362abeca786444a8dea2b47",
                "__v": 0
            }
            ,  {
                "_id": "6362adfa93115709036400fc",
                "nom": "Demande d'acte de naissance",
                "procedure": "Naissance",
                "procedureId": "6362abf1a786444a8dea2b49",
                "__v": 0
            },
            {
                "_id": "6362ae0693115709036400fe",
                "nom": "Demande d'acte de mariage",
                "procedure": "Mariage",
                "procedureId": "6362abeca786444a8dea2b47",
                "__v": 0
            },  {
                "_id": "6362adfa93115709036400fc",
                "nom": "Demande d'acte de naissance",
                "procedure": "Naissance",
                "procedureId": "6362abf1a786444a8dea2b49",
                "__v": 0
            },
            {
                "_id": "6362ae0693115709036400fe",
                "nom": "Demande d'acte de mariage",
                "procedure": "Mariage",
                "procedureId": "6362abeca786444a8dea2b47",
                "__v": 0
            },
            {
                "_id": "6362adfa93115709036400fc",
                "nom": "Demande d'acte de naissance",
                "procedure": "Naissance",
                "procedureId": "6362abf1a786444a8dea2b49",
                "__v": 0
            },
            {
                "_id": "6362ae0693115709036400fe",
                "nom": "Demande d'acte de mariage",
                "procedure": "Mariage",
                "procedureId": "6362abeca786444a8dea2b47",
                "__v": 0
            }
    ]
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
    const mobileTab=["nom", "procedure","procedureId", "v"]
    return <div> 
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
                 <Td>{row.procedureId}</Td>
                 <Td>{row.__v === 0 ? "0" : "1" }</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Wrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<BsFillArrowRightCircleFill/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={0}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<BsFillArrowLeftCircleFill/>}
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
        </Wrapper>
    </div>;
};

export default Blank;