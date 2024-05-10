import styled from "styled-components";

export const TableContainer = styled.table`
  width: 1000px;
  background-color: var(--bg-secondary);
  padding: 30px;
  margin: 0 auto;
`;

export const NoContentTr = styled.tr`
  text-align: center;
  background-color: #f5f5f5;
`;

export const NoContentTd = styled.td`
  padding: 20px;
  font-weight: bold;
`;

export const JsonTd = styled.td`
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
`;

export const JsonText = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;
