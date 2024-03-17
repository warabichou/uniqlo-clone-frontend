import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/TopBlackHeader';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import Heart from '../assets/heart.svg?react';
import Cart from '../assets/cart.svg?react';
import useStore from '../store/store';

const TopBlackHeader = (): JSX.Element => {
    const location = useLocation();
    const currentPath =
        location.pathname === '/'
            ? 'women'
            : location.pathname.replace('/', '');
    const {
        setSelectedBlackNav,
        setSearchMenuOpen,
        setSearchMenuInitialState,
    } = useStore();

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
                    <Link to="/women" onClick={() => setSearchMenuOpen(false)}>
                        <Logo />
                    </Link>
                </nav>
                <nav className="header-middle">
                    {navList.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => {
                                setSelectedNav(item.name);
                                setSelectedBlackNav(item.name);
                                setSearchMenuInitialState(true);
                            }}
                        >
                            <span
                                className={
                                    selectedNav === `${item.name}`
                                        ? 'header-middle-black__active'
                                        : ''
                                }
                            >
                                {item.name}
                            </span>
                        </div>
                    ))}
                </nav>
                <nav className="header-right">
                    <Link to="/login" onClick={() => setSearchMenuOpen(false)}>
                        <Heart />
                    </Link>
                    <Link to="/cart" onClick={() => setSearchMenuOpen(false)}>
                        <Cart />
                    </Link>
                </nav>
            </header>
        </Wrapper>
    );
};

export default TopBlackHeader;
