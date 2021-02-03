import React from 'react';
import { LangContainer, TableTitle } from './styles/styles';

const Languages = (props) => {
  console.log('props in languages', props)
  let check = '&#10004;'
  return (
    <div>
      <LangContainer>
        <TableTitle>Languages:</TableTitle>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Interface</th>
              <th>Full Audio</th>
              <th>Subtitles</th>
            </tr>
            <tr>
              <td>{props.languages[0]}</td>
              {props.languages[1] ? <td>&#10004;</td> : <td></td>}
              {props.languages[2] ? <td>&#10004;</td> : <td></td>}
              {props.languages[3] ? <td>&#10004;</td> : <td></td>}
              </tr>
          </tbody>
        </table>
      </LangContainer>
    </div>
  )
}

export default Languages;