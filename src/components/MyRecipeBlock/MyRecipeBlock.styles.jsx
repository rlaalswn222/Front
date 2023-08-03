import { styled } from 'styled-components';

const Container = styled.div`
  gap: 50px;
  display: flex;
  align-items: center; /* 요소들을 세로 방향으로 중앙 정렬 */
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextContainer = styled.div`
 flex-direction: column;
 display: flex;
  gap: 10px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.div`
background-color: #ffffff; /* 흰색 배경 */
width: 100px;
height: 30px;
color: #A5CE55; /* 연두색 글자색 */
border: 2px solid #A5CE55; /* 연두색 테두리 */
border-radius: 20px; /* 둥근 테두리 */
padding: 8px 16px; /* 버튼 내용과 테두리 간격 */
font-family: 'Noto Sans';
font-style: normal;
font-weight: 500;
font-size: 7px;
margin-left: 300px;
padding-left: 27px;

`;

const Img = styled.img`
  box-sizing: border-box;
  width: 30%;
  height: 70%;
  border-radius: 15px;
`;
const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Summary = styled.span``;

const Date = styled.div`
  align-items: center;
  gap: 5px;
`;

const Watch = styled.div`
  align-items: center;
  gap: 5px;
`;

const Scrap = styled.div`
  align-items: center;
  gap: 5px;
`;
const Comment = styled.div`
  align-items: center;
  gap: 5px;
`;



export { Container, Img, Title, Summary, Date, Watch, Scrap, Comment, IconContainer, TextContainer, ContentContainer, Button };



