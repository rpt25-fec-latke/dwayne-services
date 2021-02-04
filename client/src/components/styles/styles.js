import styled from 'styled-components';

//* Metadata
//* ------------------------------------
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background: #1b2838;  
`;

//* Options
//* ------------------------------------
export const EvenBiggerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: linear-gradient(to right, #16212d, #0e151d);
  padding: 16px;
  margin-bottom: 8px;
`;

export const OptContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background: #0f161f;
  height: 26px;
  width: 276px;
  padding-bottom: 2px;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 26px;
  background: #111923;
  width: 30px;
`;
export const OptionsBox = styled.div`
  display: flex;
  align-items: center;
  width: 243px;
  color: #67c1f5;
  background-image: linear-gradient(to right, #1a2a37, #15232d);
`;
export const OptionsIcon = styled.img`
  height: 16px;
  width: 26px;
`;
export const ColoredText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #67c1f5;
`;

//* Languages
//* ------------------------------------

export const LangContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
/* #16212d #0e151d */
background-image: linear-gradient(to right, #16212d, #0e151d);
padding: 16px;
margin-bottom: 8px;
`;

export const TableTitle = styled.div`
  color: #8f98a0;
  font-size: 12px;
`;
