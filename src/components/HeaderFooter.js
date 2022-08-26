import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '/AppHeader';

export default function HeaderFooter() {

    const { theme } = useContext(ThemeContext);

return (

    <HeaderFooter>
        <AppHeader />
        <Outlet />
        <MainFooter />
    </HeaderFooter>

);

};