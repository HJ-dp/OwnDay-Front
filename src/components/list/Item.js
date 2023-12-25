import styled from 'styled-components';

function Item() {
    return (
        <>
            <ItemContainer>
                <Ficture></Ficture>
                <Title>포터블 모니터</Title>
                <Schdule>12/19~12/31</Schdule>
                <Price>30000원/일</Price>
            </ItemContainer>
        </>
    );
  }
  
  export default Item;


  const ItemContainer = styled.div`
    width:100%;
    height:250px;
    display:flex;
    flex-direction:column;
    gap:3px;
  `

  const Ficture = styled.div`
    width:100%;
    background-color:#bbb;
    width:200px;
    height:200px;
    border-radius:20px;
  `

  const Title = styled.h3`

  `
  const Schdule = styled.h4`
  `
  const Price = styled.h3`
  `