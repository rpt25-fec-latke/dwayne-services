import styled from 'styled-components';

//* Metadata
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background: #1b2838;  
`

//* Options
export const EvenBiggerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  background: #0f161f;
  padding: 16px;
`

export const OptContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background: #0f161f;
  height: 26px;
  width: 276px;
  padding-bottom: 2px;
`
export const OptPictureBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 26px;
  background: #111923;
  width: 30px;
`
export const OptionsBox = styled.div`
  width: 243px;
  color: #67c1f5;
  background: #67c1f5;
  opacity: 10%;
`
export const OptionsIcon = styled.img`
  height: 16px;
  width: 26px;
`
export const ColoredText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #67c1f5;
`