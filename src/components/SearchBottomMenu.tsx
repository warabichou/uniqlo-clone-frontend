import { MouseEvent, useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/SearchBottomMenu';
import Search from '../assets/bottom-search.svg?react';
import Camera from '../assets/camera.svg?react';
import IQ from '../assets/iq.svg?react';
import Home from '../assets/home-white.svg?react';
import Close from '../assets/close.svg?react';
import User from '../assets/user.svg?react';
import LeftArrow from '../assets/left-arrow.svg?react';
import useStore from '../store/store';
import { Link, useLocation } from 'react-router-dom';
import { TrendWordsHistory, TrendWordsHorizontalSlider } from '.';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

const SearchBottomMenu = (): JSX.Element => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isArrowVisible, setIsArrowVisible] = useState<boolean>(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState<boolean>(false);
    const [isNotFirstRender, setIsNotFirstRender] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
        setIsHistoryVisible(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const closeMenu = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (
            !isFocused &&
            !target.closest('.search-bottom-menu__trend-words-container')
        ) {
            setIsFocused(false);
            setIsHistoryVisible(false);
        }
    };

    const closeMenuSp = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest('.search-bottom-menu__trend-words-container')) {
            setIsFocused(false);
            setIsHistoryVisible(false);
        }
    };

    const {
        setSearchMenuOpen,
        setSearchMenuInitialState,
        setSelectedBlackNav,
    } = useStore();

    const location = useLocation();
    const currentPath =
        location.pathname === '/'
            ? 'women'
            : location.pathname.replace('/', '');

    useEffect(() => {
        if (isFocused) {
            setIsArrowVisible(true);
            setIsNotFirstRender(true);
        }
    }, [isFocused]);

    return (
        <Wrapper
            onClick={() => {
                if (!isFocused) {
                    setIsArrowVisible(false);
                }
            }}
            style={{ height: isMobile && isHistoryVisible ? '100%' : 'auto' }}
        >
            <BrowserView
                className={`search-bottom-menu__trend-words ${
                    isHistoryVisible && 'search-bottom-menu__trend-words-active'
                } ${
                    !isHistoryVisible &&
                    isNotFirstRender &&
                    'search-bottom-menu__trend-words-inactive'
                }`}
            >
                <span
                    className="search-bottom-menu__trend-words-wrap"
                    onClick={closeMenu}
                >
                    <div className="search-bottom-menu__trend-words-container">
                        <h5 onClick={() => setIsHistoryVisible(false)}>
                            トレンドワード
                        </h5>
                        <TrendWordsHorizontalSlider />
                        <TrendWordsHistory
                            closeMenu={() => setIsHistoryVisible(false)}
                        />
                    </div>
                </span>
            </BrowserView>

            <BrowserView className="search-bottom-menu__bg">
                <div className="search-bottom-menu__form-wrap">
                    {isArrowVisible && (
                        <div
                            className="search-bottom-menu__left-arrow"
                            onClick={() => {
                                setSearchMenuOpen(false);
                                setSearchMenuInitialState(true);
                                setSelectedBlackNav(currentPath);
                            }}
                        >
                            <LeftArrow />
                        </div>
                    )}
                    <div className="search-bottom-menu__form-wrap-input">
                        {!isFocused && <Search />}
                        <input
                            className="search-bottom-menu__input"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="キーワードで探す （例） ヒートテック"
                        />
                        <Camera />
                    </div>
                    {!isFocused && <IQ />}
                </div>

                <div
                    className="search-bottom-menu__container"
                    onClick={closeMenu}
                >
                    <div className="search-bottom-menu__icon">
                        <div
                            onClick={() => setSearchMenuOpen(false)}
                            className="search-bottom-menu__icon-white-bg"
                        >
                            <Home />
                        </div>
                        <div
                            className="search-bottom-menu__icon-black-bg"
                            onClick={() => {
                                setSearchMenuOpen(false);
                                setSearchMenuInitialState(true);
                                setSelectedBlackNav(currentPath);
                            }}
                        >
                            <Close />
                        </div>
                        <Link
                            to="/login"
                            className="search-bottom-menu__icon-white-bg"
                            onClick={() => setSearchMenuOpen(false)}
                        >
                            <User />
                        </Link>
                    </div>
                </div>
            </BrowserView>

            {isHistoryVisible && (
                <MobileView
                    className={`search-bottom-menu__trend-words ${
                        isHistoryVisible &&
                        'search-bottom-menu__trend-words-active-sp search-bottom-menu__trend-words-sp'
                    } ${
                        !isHistoryVisible &&
                        isNotFirstRender &&
                        'search-bottom-menu__trend-words-sp'
                    }`}
                >
                    <div className="search-bottom-menu__form-wrap search-bottom-menu__form-wrap-sp">
                        {isArrowVisible && (
                            <div
                                className="search-bottom-menu__left-arrow"
                                onClick={() => {
                                    setSearchMenuOpen(false);
                                    setSearchMenuInitialState(true);
                                    setSelectedBlackNav(currentPath);
                                }}
                            >
                                <LeftArrow />
                            </div>
                        )}
                        <div className="search-bottom-menu__form-wrap-input">
                            {!isFocused && <Search />}
                            <input
                                className="search-bottom-menu__input search-bottom-menu__input-sp"
                                placeholder="キーワードで探す （例） ヒートテック"
                            />
                            <Camera />
                        </div>
                        {!isFocused && <IQ />}
                    </div>

                    <span
                        className="search-bottom-menu__trend-words-wrap"
                        onClick={closeMenuSp}
                    >
                        <div className="search-bottom-menu__trend-words-container">
                            <h5 onClick={() => setIsHistoryVisible(false)}>
                                トレンドワード
                            </h5>
                            <TrendWordsHorizontalSlider />
                            <TrendWordsHistory
                                isSp
                                closeMenu={() => setIsHistoryVisible(false)}
                            />
                        </div>
                    </span>
                </MobileView>
            )}

            {!isHistoryVisible && (
                <MobileView className="search-bottom-menu__bg">
                    <div className="search-bottom-menu__form-wrap">
                        {isArrowVisible && isFocused && (
                            <div
                                className="search-bottom-menu__left-arrow"
                                onClick={() => {
                                    setSearchMenuOpen(false);
                                    setSearchMenuInitialState(true);
                                    setSelectedBlackNav(currentPath);
                                }}
                            >
                                <LeftArrow />
                            </div>
                        )}
                        <div className="search-bottom-menu__form-wrap-input search-bottom-menu__form-wrap-input-sp">
                            {!isFocused && <Search />}
                            <input
                                className="search-bottom-menu__input"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                placeholder="キーワードで探す （例） ヒートテック"
                            />
                            <Camera />
                        </div>
                        {!isFocused && <IQ />}
                    </div>

                    <div
                        className={`${
                            isFocused && 'search-bottom-menu__container-sp'
                        } search-bottom-menu__container`}
                        onClick={closeMenu}
                    >
                        <div className="search-bottom-menu__icon">
                            <div
                                onClick={() => setSearchMenuOpen(false)}
                                className="search-bottom-menu__icon-white-bg"
                            >
                                <Home />
                            </div>
                            <div
                                className="search-bottom-menu__icon-black-bg"
                                onClick={() => {
                                    setSearchMenuOpen(false);
                                    setSearchMenuInitialState(true);
                                    setSelectedBlackNav(currentPath);
                                }}
                            >
                                <Close />
                            </div>
                            <Link
                                to="/login"
                                className="search-bottom-menu__icon-white-bg"
                                onClick={() => setSearchMenuOpen(false)}
                            >
                                <User />
                            </Link>
                        </div>
                    </div>
                </MobileView>
            )}
        </Wrapper>
    );
};

export default SearchBottomMenu;
