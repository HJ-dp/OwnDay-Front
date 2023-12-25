import React from 'react';
import styled from 'styled-components';
import { FlexContainer, MainContainer } from '../../styles/styles';
import Header from './Header';
import Footer from './Footer';
const AppLayout = ({ children }) => {
    // const [ThemeMode, toggleTheme] = useTheme();
    return (
        <WrapContainer>
            <Header />
            <FlexContainer>
                <MainContainer>
                    {children}
                </MainContainer>
            </FlexContainer>
            <Footer/>
        </WrapContainer>
    )
}

export default AppLayout;

const WrapContainer = styled.main`
  position: relative;
  overflow-x: hidden;
`;