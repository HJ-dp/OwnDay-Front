import { styled } from "styled-components";
import KakaoMap from "../map/KakaoMap";

function ItemDetail() {
    return (
        <>
                <ContentBox>
                    <PictureBox/>
                    <InfoBox>
                        <Box>
                            <h4>물건 |</h4>
                            <Title>포따블 모니터</Title>
                        </Box>
                        <Box>
                            <h4>렌터 |</h4>
                            <Rentor>이호진</Rentor>
                        </Box>
                        <Box>
                            <h4>가격 |</h4>
                            <Rentor>10000원 / 일</Rentor>
                        </Box>
                        <Box>
                            <h4>설명 |</h4>
                        </Box>
                            <h5>저 이거 조금밖에 안씀 ㅋ</h5>
                    </InfoBox>
                </ContentBox>
                <KakaoMap x='100%' y='400px'/>
        </>
    );
}

export default ItemDetail;

const Title = styled.h2`
`

const Rentor = styled.h3`
`

const PictureBox = styled.div`
    width:500px;
    height:500px;
    background-color:blue;
    border-radius:10px;
    background-image: url("testImg.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    border: 4px solid gray;
`

const Box = styled.div`
    display:flex;
    justify-content:space-between;
`

const ContentBox = styled.div`
    display: flex;
    gap: 1em;
`

const InfoBox = styled.div`
    width:50%;
    // background-color:red;
    display:flex;
    flex-direction: column;
    gap:1em;
    padding:2em;
`