import { MouseEvent, useState } from 'react';
import Wrapper from '../assets/wrappers/Header';
import Logo from '../assets/logo.svg?react';
import Search from '../assets/search.svg?react';
import Heart from '../assets/heart.svg?react';
import Cart from '../assets/cart.svg?react';
import { Link } from 'react-router-dom';
import { HeaderHoverMenu } from '.';

const Header = (): JSX.Element => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [hoveredText, setHoveredText] = useState<string>('');

    const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        setHoveredText(target.innerText);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Wrapper>
            <header>
                <div className="header">
                    <nav className="header-left">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <div className="header-navigation">
                            <Link to="/women">
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    WOMEN
                                </span>
                            </Link>
                            <Link to="#">
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    MEN
                                </span>
                            </Link>
                            <Link to="#">
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    KIDS
                                </span>
                            </Link>
                            <Link to="#">
                                <span
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    BABY
                                </span>
                            </Link>
                        </div>
                        {/* {isHovered && <div>Hello world!</div>} */}
                    </nav>
                    <nav className="header-right">
                        <Link to="#" className="header-icon">
                            <Search />
                            <p>見つける</p>
                        </Link>
                        <Link to="#" className="header-icon">
                            <Heart />
                            <p>お気に入り</p>
                        </Link>
                        <Link to="#" className="header-icon">
                            <Cart />
                            <p>カード</p>
                        </Link>
                    </nav>
                </div>
                <HeaderHoverMenu
                    isHovered={isHovered}
                    hoveredText={hoveredText}
                />
            </header>
        </Wrapper>
    );
};

export default Header;
