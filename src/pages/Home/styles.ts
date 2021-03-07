import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface GenreProps {
  isSelected: boolean;
}
interface PageProps {
  isCurrentPage: boolean;
  shouldHide: boolean;
}

export const Header = styled.div`
display:flex;
width:100%;
justify-content: center;
padding: 20px 0;
font-size: 28px;
color: #03CAD2;
background:#116193;
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 80%;
  margin: 50px auto;
  .scroll-container{
    max-width: 100%;
    margin-bottom: 50px;
  }
`;

export const Genres = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000000;
`;

export const Genre = styled.div<GenreProps>`
font-family: 'Lato', sans-serif;
    padding: 10px;
    margin: 0 10px;
    color: #116193;
    border: 2px solid #116193;
    border-radius: 50px;
    cursor: pointer;
    min-width: 150px;
    text-align: center;
  ${props =>
    props.isSelected &&
    css`
      background:#116193;
      border-color: #116193;
      color: #03CAD2;
    `}
    @media (max-width: 320px) {
      font-size: 14px;
    }
`;

export const Content = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  place-content: center;
  width: 100%;

`;

export const Movie = styled.div`
  color: #000;
  display: flex;
  flex-direction: row;
  width: 100%;
  a{
    text-decoration: none;
  }
  & + div {
    margin-top: 20px;
  }
  @media(max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Image = styled.div`
flex:1;
img{
      max-width: 100%;
      @media(min-width: 1025px) {
        width: 300px;
      }
    }
`;

export const Description = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  @media(max-width: 1024px){
    width: 100%;
  }
  `;

export const TitleHeader = styled.div`
  font-size:20px;
  display: flex;
  background: #116193;
  flex-direction: row;
  align-items: center;
  div{
    transform: translateY(45%);
    width:80px;
  span{
    background:#116193;
    display: flex;
    color:#00E6E3;
    border: 4px solid #00E6E3;
    border-radius: 50%;
    padding: 25px;
    width: 50px;
    height: 50px;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:320px){
      font-size: 14px;
      width: 40px;
      height: 40px;
      margin: 0 20px;
      padding: 0;
      border-width: 2px;
    }
  }
 }

 h3{
  color: #00E6E3;
  padding: 0 5px;

 @media screen and (max-width:320px){
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
 }

 @media screen and (max-width:320px){
  font-size: 14px;

 }
`;

export const Overview = styled.div`
      flex: 1;
      background: #EBEBEB;
      p.release-date{
        font-family: 'Lato', sans-serif;
        max-height: 20px;
        color:#B8B8B8;
        margin-left: 80px;
      }
      p.overview{
        font-family: 'Lato', sans-serif;
        color: #606060;
        margin: 3% 0;
        padding: 0 20px;
      }

`;

export const RelatedGenres = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 20px;
  width: 200px;
`;

export const RelatedGenre = styled.li`
    font-family: 'Lato', sans-serif;
    color: #116193;
    background: #FFFF;
    padding: 10px;
    margin: 20px 10px;
    border: 2px solid #116193;
    border-radius: 50px;
    cursor: default;
    font-size: 12px;
    min-width: 120px;
    text-align: center;

`;

const appearFromLeft = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}
to{
  opacity: 1;
  transform: translateX(0);
}
`;

export const Pages = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
`;

export const Page = styled.span<PageProps>`
    font-size: 16px;

    display: flex;
    margin: 5px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #116193;
${props =>
    props.isCurrentPage &&
    css`
      font-size: 24px;
      background:#116193;
      border: 4px solid #03CAD2;
      color: #03CAD2;
      border-radius: 50%;
    `}
${props =>
    props.shouldHide &&
    css`
      display:none;
    `}
`;
