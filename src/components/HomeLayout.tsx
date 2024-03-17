import Wrapper from '../assets/wrappers/HomeLayout';
import { Outlet } from 'react-router-dom';
import { Header } from '.';

const HomeLayout = (): JSX.Element => {
    return (
        <>
            <Header />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
};

export default HomeLayout;
