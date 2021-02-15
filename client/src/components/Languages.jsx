/* eslint-disable react/prop-types */
import React from 'react';
import {
  TableHeader, LangContainer, TableData, TableTitle, TableWrapper, TableRow
} from './styles/styles';

const Languages = ({ languages }) => {
  console.log('languages', languages);
  return (
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
            {languages.map((language) => (
              <TableRow key={`Language ${language[0]}`}>
                <td>{language[0]}</td>
                {language[1] ? <TableData>&#10004;</TableData> : <TableData />}
                {language[2] ? <TableData>&#10004;</TableData> : <TableData />}
                {language[3] ? <TableData>&#10004;</TableData> : <TableData />}
              </TableRow>
            ))}
          </tbody>
        </TableWrapper>
      </LangContainer>
    </div>
  );
};

export default Languages;
