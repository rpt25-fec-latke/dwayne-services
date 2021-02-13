/* eslint-disable react/prop-types */
import React from 'react';
import { TableHeader, LangContainer, TableData, TableTitle, TableWrapper, TableRow } from './styles/styles';

const Languages = ({ languages }) => (
  <div>
    <LangContainer>
      <TableTitle>Languages:</TableTitle>
      <TableWrapper>
        <tbody>
          <TableRow>
            <TableHeader> </TableHeader>
            <TableHeader>Interface</TableHeader>
            <TableHeader>Full Audio</TableHeader>
            <TableHeader>Subtitles</TableHeader>
          </TableRow>
          <TableRow>
            <td>{languages[0]}</td>
            {languages[1] ? <TableData>&#10004;</TableData> : <TableData />}
            {languages[2] ? <TableData>&#10004;</TableData> : <TableData />}
            {languages[3] ? <TableData>&#10004;</TableData> : <TableData />}
          </TableRow>
        </tbody>
      </TableWrapper>
    </LangContainer>
  </div>
);

export default Languages;
