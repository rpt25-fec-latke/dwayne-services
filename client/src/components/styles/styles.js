import styled from 'styled-components';

//* Metadata
//* ------------------------------------
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 308px;
`;

export const ModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: linear-gradient(to right, #16212d, #0e151d);
  padding: 16px;
  margin-bottom: 8px;
`;

//* Options
//* ------------------------------------
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
  padding-left: 8px;
`;

//* Languages
//* ------------------------------------
export const LangContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 276px;
/* #16212d #0e151d */
background-image: linear-gradient(to right, #16212d, #0e151d);
padding: 16px;
margin-bottom: 8px;
`;

export const TableTitle = styled.div`
  color: #8f98a0;
  font-size: 12px;
`;

export const TableWrapper = styled.table`
  font-size: 12px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #626366;
`;

export const TableHeader = styled.th`
  font-weight: normal;
  border-bottom: 1px solid #626366;
`;

export const TableData = styled.td`
  color: #67c1f5;
`;

//* Rating
//* ------------------------------------
export const RatingContainer = styled.div`
  display: flex;
  width: 276px;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const RatingInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RatingIcon = styled.div`
  height:90px;
  width:60px;
`;

export const RatingDescriptors = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  padding-left: 8px;
  bottom: 12px;
  position: relative;
`;

export const RatingBureau = styled.div`
  padding-top: 6px; 
  font-size: 12px;
`;

//* InfoPanel
//* ------------------------------------
export const InfoContainer = styled.div`
  display: flex;
  width: 276px;
  line-height: 20px;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const GrayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #8f98a0;
  font-size: 12px;
  align-items: flex-end;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #67c1f5;
  font-size: 12px;
  align-items: flex-end;
`;

export const BoldBox = styled.b`
  font-size: 10px;
  font-weight: normal;
  text-transform: uppercase;
  color: #556772;
  padding-right: 4px;
`;

export const GrayText = styled.div`
  color: #8f98a0;
`;
