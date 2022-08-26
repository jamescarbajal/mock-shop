import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import { MainContainer } from './StyledComponents';

export default function HeaderFooter() {

    const { theme } = useContext(ThemeContext);

return (

    <MainContainer>
        <AppHeader />
        {/* <Outlet />
        <MainFooter /> */}
    </MainContainer>

);

};