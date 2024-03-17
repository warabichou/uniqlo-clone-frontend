import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/TopHeader';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import Heart from '../assets/heart.svg?react';
import Cart from '../assets/cart.svg?react';
import useStore from '../store/store';

const TopHeader = (): JSX.Element => {
    const location = useLocation();
    const { setSelectedBlackNav } = useStore();
    const element = document.getElementsByClassName('header-middle__active')[0]
        ?.innerHTML;

    useEffect(() => {
        setSelectedBlackNav(element);
    }, [element, setSelectedBlackNav]);

    const currentPath =
        location.pathname === '/'
            ? 'women'
            : location.pathname.replace('/', '');

    const [selectedNav, setSelectedNav] = useState<string>(currentPath);
    useEffect(() => {
        setSelectedNav(currentPath);
    }, [currentPath]);

    const navList: { id: number; name: string }[] = [
        {
            id: 1,
            name: 'women',
        },
        {
            id: 2,
            name: 'men',
        },
        {
            id: 3,
            name: 'kids',
        },
        {
            id: 4,
            name: 'baby',
        },
    ];

    return (
        <Wrapper>
            <header>
                <nav className="header-left">
                    <Link to="/women">
                        <Logo />
                    </Link>
                </nav>
                <nav className="header-middle">
                    {navList.map((item) => (
                        <Link
                            key={item.id}
                            to={`/${item.name}`}
                            onClick={() => {
                                setSelectedNav(item.name);
                                setSelectedBlackNav(item.name);
                            }}
                        >
                            <span
                                className={
                                    selectedNav === `${item.name}`
                                        ? 'header-middle__active'
                                        : ''
                                }
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </nav>
                <nav className="header-right">
                    <Link to="/login">
                        <Heart />
                    </Link>
                    <Link to="/cart">
                        <Cart />
                    </Link>
                </nav>
            </header>
        </Wrapper>
    );
};

export default TopHeader;
