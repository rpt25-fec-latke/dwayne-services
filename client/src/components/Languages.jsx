/* eslint-disable react/prop-types */
import React from 'react';
import { LangContainer, TableTitle } from './styles/styles';

const Languages = ({ languages }) => (
  <div>
    <LangContainer>
      <TableTitle>Languages:</TableTitle>
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>Interface</th>
            <th>Full Audio</th>
            <th>Subtitles</th>
          </tr>
          <tr>
            <td>{languages[0]}</td>
            {languages[1] ? <td>&#10004;</td> : <td />}
            {languages[2] ? <td>&#10004;</td> : <td />}
            {languages[3] ? <td>&#10004;</td> : <td />}
          </tr>
        </tbody>
      </table>
    </LangContainer>
  </div>
);

export default Languages;
