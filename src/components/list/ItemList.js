import Item from "./Item";
import { styled } from "styled-components";
function ItemList() {
    return (
        <>
            <ListContainer>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </ListContainer>
        </>
    );
}

export default ItemList;


const ListContainer = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-auto-rows: 250px;
    gap:10px;
  `