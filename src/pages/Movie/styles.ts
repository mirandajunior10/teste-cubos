import styled from "styled-components";

export const Header = styled.div`
display:flex;
width:100%;
justify-content: center;
padding: 20px 0;
font-size: 28px;
color: #03CAD2;
background:#116193;
text-decoration: none;
`;

export const Movie = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 80%;

  & + div {
    margin-top: 20px;
  }

`;

export const Description = styled.div`
  flex:1;
  display: flex;
  flex-direction: row;
  div{
    img{
      max-width: 300px;
      @media(max-width: 1024px){
        max-width: 100%;
      }
    }
  }
  @media (max-width:1024px){
    flex-direction: column-reverse;
  }
`;

export const TitleHeader = styled.div`
  font-size:20px;
  display: flex;
  flex-direction: row;
  background:#E6E6E6;
  justify-content: space-between;
  padding: 10px 20px 5px 40px;
  align-items:flex-end;
  p.release-date{
    font-family: 'Lato', sans-serif;
  }
 h3{
  color: #116193;
  font-weight: normal;
  font-size: 28px;

 @media screen and (max-width:320px){
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
 }

 p{
  font-size: 16px;
  color: #B8B8B8;
  font-weight: normal

 }

  div{
    transform: translateY(45%);
    width:80px;
  span{
    background:#116193;
    display: flex;
    color:#03CAD2;
    border: 4px solid #03CAD2;
    border-radius: 50%;
    padding: 25px;
    width: 50px;
    height: 50px;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:320px){
      font-size: 12px;
      width: 30px;
      height: 30px;
      margin: 0 3px;
      padding: 0;
      border-width: 2px;
    }
  }
 }


 @media screen and (max-width:1024px){
  font-size: 14px;
  padding-left: 2px;
 }
`;

export const Overview = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #EBEBEB;
    width: 50%;
    padding: 0 20px;
    div.overview-container{
      flex:1;
      margin-top: 20px;
      p.overview-title{
        font-size:18px;
        color: #116193;
        border-bottom: 2px solid #79EDEB;
        padding-bottom: 5px;
      }
      p.overview{
        font-family: 'Lato', sans-serif;
        color: #606060;
        margin: 3% 0;
      }
    }
    @media (max-width: 1024px) {
      width: 100%
    }
`;

export const InfoContainer = styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  margin-top: 20px;
  p.infos-title{
    font-size:18px;
    color: #116193;
    border-bottom: 2px solid #79EDEB;
    padding-bottom: 5px;
  }
`;

export const InfoContentContainer = styled.div`
  margin-top:10px;
  div.infoScroll{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 5px;
  }
`;

export const InfoContent = styled.div`
  margin-right: 10px;
  flex-direction: column;

  p.info-title{
    color: #116193;
    font-weight: 600;


  }
  p.info{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #000;
    min-width: max-content;

  }
`;

export const BottomContainer = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: space-between;

div{
  margin-top: 20px;
  margin-right: 20px;
  span{
    font-size: 40px;
    background:#116193;
    display: flex;
    color:#00E6E3;
    border: 4px solid #00E6E3;
    border-radius: 50%;
    padding: 25px;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:1024px){
      font-size: 16px;
      width: 60px;
      height: 60px;
      margin: 0 3px;
      padding: 0;
      border-width: 2px;
    }
  }
}

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

export const Video = styled.div`
  margin: 0 auto;
  width: 80%;
`
