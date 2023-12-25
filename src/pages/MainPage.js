import { styled } from "styled-components";
import KakaoMap from "../components/map/KakaoMap";
import ItemList from "../components/list/ItemList";

function MainPage() {
    return (
        <>
            <MainContainer>
                <ItemList />
                <KakaoMap />
            </MainContainer>
        </>
    );
}

export default MainPage;

const MainContainer = styled.div`
    display:flex;
    width:100%;
  `