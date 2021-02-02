import React from 'react';

const Languages = (props) => {
    return (
        <div>
            <div>Languages:</div>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Interface</th>
                        <th>Full Audio</th>
                        <th>Subtitles</th>
                    </tr>
                    <tr>
                        <td>props.languages[0]</td>
                        <td>props.languages[1]</td>
                        <td>props.languages[2]</td>
                        <td>props.languages[3]</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Languages;