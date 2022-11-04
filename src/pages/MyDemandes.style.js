import styled from "styled-components";
import { desktop, tablet } from "../theme/globalStyles";

export const Table = styled.table`
  border-collapse: collapse;
  color: var(--black);
  align-items: center;
  text-align: left;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
  @media screen and (min-width: ${desktop}) {
    justify-content: start;
    font-weight: 800;
  }
`;

export const Thead = styled.thead`
  background-color: #308efe;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  height: 2.833rem;
  @media screen and (min-width: ${desktop}) {
    height: 3.625rem;
  }
`;

export const Th = styled.th`
  font-weight: 700;
  text-align: left;
  width: 12.521rem;
  white-space: nowrap;
  font-size: 1.025rem;
  padding: 0rem 0rem 0 1.5rem;
  text-align: left;
  &:last-child {
    text-align: center;
  }
  @media screen and (max-width: ${tablet}) {
    text-align: left;
    &.hide {
      display: none;
    }
  }
`;
export const Td = styled.td`
  font-size: 0.875rem;
  padding: 0rem 0rem 0 1.5rem;
  &:last-child {
    text-align: center;
  }
  @media screen and (max-width: ${tablet}) {
    &.hide {
      display: none;
    }
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 1rem;
    line-height: 1.313rem;
    text-align: left;
    padding: 0rem 0rem 0 1.75rem;
    white-space: nowrap;

    &.terrain {
      display: flex;
      justify-content: start;
      align-items: center;
      div {
        background-color: var(--gray-200);
        width: 3.5rem;
        height: 3.5rem;
      }
    }
    &:last-child {
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  width: 9.744rem;
  height: 2.292rem;
  font-weight: 800;
  font-size: 0.82rem;
  color: var(--gray-500);
  border: 1px solid var(--gray-500);
  border-radius: 0.41rem;
  background-color: var(--white);
  &.admin {
    width: 1.625rem;
    height: 1.625rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
    border-color: var(--white);
    &.delete {
      background-color: var(--red);
    }
    &.edit {
      background-color: var(--gray-300);
    }
  }
`;

export const Span = styled.span`
  height: 0.75rem;
  width: 0.75rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  display: inline-block;
  background: ${(props) => (props?.status ? `${props?.status}` : "red")};
`;

export const Wrapper = styled.div`
  color: var(--gray-400);
  svg {
    font-size: 1.25rem;
    color: var(--blue-force);
  }
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    font-size: 0.75rem;
    gap: 0.563rem;
  }
  .pagination .page-num {
    padding: 0.188rem;
    cursor: pointer;
    font-weight: 700;
  }
  .pagination .active {
    text-decoration: underline;
    color: var(--violet);
  }
  @media screen and (min-width: ${tablet}) {
    svg {
      font-size: 1.3rem;
    }
    .pagination {
      font-size: 0.75rem;
    }

    .pagination .page-num {
      padding: 0.313rem;
    }
  }
  @media screen and (min-width: ${desktop}) {
    svg {
      font-size: 1.7rem;
    }
    .pagination {
      font-size: 1rem;
    }
    .pagination .page-num {
      padding: 0.5rem 0.375rem;
    }
  }
`;
