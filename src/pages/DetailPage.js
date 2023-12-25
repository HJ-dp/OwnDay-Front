import { styled } from "styled-components";
import ItemDetail from "../components/list/ItemDetail";

import { useNavigate } from 'react-router-dom'
function DetailPage() {

    const navigate = useNavigate();
    return (
        <>
            <DetailContainer>
                <HeaderBox>
                    <Back onClick={() => { navigate(-1) }} src="https://img.icons8.com/ios/50/back--v1.png" alt="뒤로가기" />
                    <Title>빌리기</Title>
                    <Rentor></Rentor>
                </HeaderBox>
                <ItemDetail />
            </DetailContainer>
        </>
    );
}

export default DetailPage;

const DetailContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
  `

const HeaderBox = styled.div`
    width:100%;
    height:44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2`
`

const Rentor = styled.h3`
`

const Back = styled.img`
    width:30px;
    height:30px;
    cursor:pointer;
`
