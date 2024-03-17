import { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/HeaderHoverMenu';
import { RxCross2 } from 'react-icons/rx';
import User from '../assets/user.svg?react';
import Shop from '../assets/shop.svg?react';

type HeaderHoverMenuType = {
    isHovered: boolean;
    hoveredText: string;
};

const HeaderHoverMenu = ({
    isHovered,
    hoveredText,
}: HeaderHoverMenuType): JSX.Element => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [isMenuHovered, setIsMenuHovered] = useState<boolean>(false);
    const [headerText, setHeaderText] = useState<string>('');

    const resetAnimation = () => {
        const element = document.getElementById('header-hover-menu');
        element?.classList.remove('animation');
        setTimeout(() => {
            element?.classList.add('animation');
        }, 10);
    };

    const handleMouseEnter = () => {
        setIsMenuHovered(true);
    };

    const handleMouseLeave = () => {
        setIsMenuHovered(false);
    };

    useEffect(() => {
        if (isHovered) {
            const delay = setTimeout(() => {
                resetAnimation();
                setMenuVisible(true);
                setHeaderText(hoveredText);
            }, 500);

            return () => clearTimeout(delay);
        } else if (isMenuHovered) {
            setMenuVisible(true);
        } else {
            const delay = setTimeout(() => {
                setMenuVisible(false);
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [isHovered, isMenuHovered]);

    return (
        <Wrapper>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="header-hover-menu"
                className={`header-hover-menu__container animation ${
                    menuVisible ? 'show' : ''
                }`}
            >
                <div className="header-hover-menu__title-container">
                    <div className="header-hover-menu__title">
                        {/* <span>{hoveredText} TOP</span> */}
                        <span>{headerText} TOP</span>
                        <div
                            onClick={() => setMenuVisible(false)}
                            className="header-hover-menu__close-btn"
                        >
                            <RxCross2 className="cross-icon" />
                            <p>閉じる</p>
                        </div>
                    </div>
                </div>
                <div className="header-hover-menu__navigation-container">
                    <div className="header-hover-menu__categories">
                        <ul>
                            <li className="selected">トップス</li>
                            <li>パンツ</li>
                            <li>ワンピース・スカート</li>
                            <li>アウター</li>
                            <li>スポーツユーティリティウェア</li>
                            <li>インナー・下着</li>
                            <li>ルーム・ホーム</li>
                            <li>グッズ</li>
                            <li>マタニティ</li>
                            <li>花</li>
                        </ul>
                        <div className="header-hover-menu__category-content">
                            <ul>
                                <li>すべてのトップス</li>
                                <li>Tシャツ・カットソー</li>
                                <li>スウェット</li>
                                <li>カーディガン</li>
                                <li>ニット・セーター</li>
                                <li>シャツ・ブラウス</li>
                                <li>フリース</li>
                                <li>カスタムオーダーシャツ</li>
                                <li>ブラトップ</li>
                                <li>UT</li>
                                <li>PEACE FOR ALL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-hover-menu__featured-column">
                        <div className="header-hover-menu__column-items">
                            <ul>
                                <li>新作商品</li>
                                <li>期間限定価格</li>
                                <li>アプリ会員限定価格</li>
                                <li>値下げ商品</li>
                                <li>まとめ買い</li>
                                <li>近日販売予定の商品</li>
                                <li>予約商品</li>
                                <li>ランキング</li>
                                <li>法人・団体様向け大量購入サービス</li>
                                <li>ユニクロのギフト</li>
                                <li>今週のチラシ</li>
                                <li>UNIQLO LIVE STATION</li>
                                <li>Language</li>
                            </ul>
                        </div>
                        <div className="header-hover-menu__content-right">
                            <div className="header-hover-menu__icon-list">
                                <div className="header-hover-menu__icon-container">
                                    <User />
                                    <p>新規会員登録・ログイン</p>
                                </div>
                                <div className="header-hover-menu__icon-container">
                                    <Shop />
                                    <p>店舗検索</p>
                                </div>
                            </div>
                            <div className="header-hover-menu__featured-list">
                                <div className="header-hover-menu__featured-container">
                                    <ul>
                                        <li>特集一覧</li>
                                        <li>UT</li>
                                        <li>公式スタイリング</li>
                                        <li>StyleHint投稿スタイリング</li>
                                        <li>About LifeWear</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default HeaderHoverMenu;
