import { useState, useEffect, useCallback } from 'react';
import Wrapper from '../assets/wrappers/HeaderCategory';
import { Link } from 'react-router-dom';
import useStore from '../store/store';
import { useGetIsMediumScreen } from '../hooks/useGetIsMediumScreen';
import { useGetIsSmallScreen } from '../hooks/useGetIsSmallScreen';
import { PrimaryImage } from '.';
import LeftArrow from '../assets/left-arrow.svg?react';
import { Categories, CategoriesType } from '../types';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

const HeaderCategory = ({
    womenCategories,
    womenCategoriesContent,
    menCategories,
    menCategoriesContent,
    kidsCategories,
    kidsCategoriesContent,
    babyCategories,
    babyCategoriesContent,
}: CategoriesType) => {
    const { noPathError } = useGetCustomToast();
    const [categories, setCategories] = useState<Categories[]>([]);

    const [minHeight, setMinHeight] = useState<string>('');
    const {
        selectedBlackNav,
        searchMenuInitialState,
        setSearchMenuInitialState,
    } = useStore();
    const isMediumScreen = useGetIsMediumScreen();
    const isSmallScreen = useGetIsSmallScreen();

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [isSelectedCategory, setIsSelectedCategory] =
        useState<boolean>(false);
    const [selectedCategoryContent, setSelectedCategoryContent] = useState<
        Categories[] | undefined
    >([]);

    // const [minContentHeight, setMinContentHeight] = useState<string>('');
    // console.log('minHeight: ' + minHeight);
    // console.log('minContentHeight: ' + minContentHeight);

    const getMinHeight = useCallback(
        (array: Categories[]) => {
            if (array.length !== 0 && !isMediumScreen && !isSmallScreen) {
                const rowsNumber = Math.ceil(array.length / 4);
                const minHeight =
                    rowsNumber * 48 + (rowsNumber - 1) * 16 + 'px';
                {
                    !selectedCategory ? setMinHeight(minHeight) : -minHeight;
                }
            } else if (array.length !== 0 && isMediumScreen && !isSmallScreen) {
                const rowsNumber = Math.ceil(array.length / 3);
                const minHeight =
                    rowsNumber * 48 + (rowsNumber - 1) * 16 + 'px';
                // {
                //     !selectedCategory
                //         ? setMinHeight(minHeight)
                //         : setMinContentHeight(minHeight);
                // }
                {
                    !selectedCategory ? setMinHeight(minHeight) : -minHeight;
                }
            } else if (array.length !== 0 && isSmallScreen) {
                const rowsNumber = Math.ceil(array.length / 2);
                const minHeight =
                    rowsNumber * 48 + (rowsNumber - 1) * 16 + 'px';
                // {
                //     !selectedCategory
                //         ? setMinHeight(minHeight)
                //         : setMinContentHeight(minHeight);
                // }
                {
                    !selectedCategory ? setMinHeight(minHeight) : -minHeight;
                }
            }
        },
        [isMediumScreen, isSmallScreen, selectedCategory]
    );

    useEffect(() => {
        if (selectedCategory && selectedCategoryContent) {
            getMinHeight(selectedCategoryContent);
        } else {
            getMinHeight(categories);
        }
    }, [getMinHeight, categories, selectedCategory, selectedCategoryContent]);

    useEffect(() => {
        setIsSelectedCategory(false);

        switch (selectedBlackNav) {
            case 'women':
                setCategories([]);
                setTimeout(() => {
                    if (womenCategories) {
                        setCategories(womenCategories);
                    }
                }, 50);
                break;
            case 'men':
                setCategories([]);
                setTimeout(() => {
                    if (menCategories) {
                        setCategories(menCategories);
                    }
                }, 50);
                break;
            case 'kids':
                setCategories([]);
                setTimeout(() => {
                    if (kidsCategories) {
                        setCategories(kidsCategories);
                    }
                }, 50);
                break;
            case 'baby':
                setCategories([]);
                if (babyCategories) {
                    setTimeout(() => {
                        setCategories(babyCategories);
                    }, 50);
                }
                break;
        }
    }, [
        selectedBlackNav,
        womenCategories,
        menCategories,
        kidsCategories,
        babyCategories,
    ]);

    function getCategoryContent(category: string) {
        switch (category) {
            case 'アウター':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.outer);
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.outer);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.outer);
                } else if (selectedBlackNav === 'baby') {
                    setSelectedCategoryContent(babyCategoriesContent?.outer);
                }
                break;
            case 'トップス':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.tops);
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.tops);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.tops);
                }
                break;
            case 'パンツ':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.pants);
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.pants);
                }
                break;
            case 'パンツ・スカート':
                setSelectedCategoryContent(kidsCategoriesContent?.pants);
                break;
            case 'ワンピース・スカート':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.dress);
                }
                break;
            case 'インナー・下着':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(
                        womenCategoriesContent?.underwear
                    );
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.underwear);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(
                        kidsCategoriesContent?.underwear
                    );
                }
                break;
            case 'ルーム・ホーム':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(
                        womenCategoriesContent?.roomHome
                    );
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.roomHome);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.roomHome);
                }
                break;
            case 'グッズ':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.goods);
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.goods);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.goods);
                }
                break;
            case 'マタニティ':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(
                        womenCategoriesContent?.maternity
                    );
                }
                break;
            case 'フォーマル':
                if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.formal);
                }
                break;
            case '花':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.flower);
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.flower);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.flower);
                } else if (selectedBlackNav === 'baby') {
                    setSelectedCategoryContent(babyCategoriesContent?.flower);
                }
                break;
            case 'スポーツユーティリティウェア':
                if (selectedBlackNav === 'women') {
                    setSelectedCategoryContent(womenCategoriesContent?.sports);
                } else if (selectedBlackNav === 'men') {
                    setSelectedCategoryContent(menCategoriesContent?.sports);
                } else if (selectedBlackNav === 'kids') {
                    setSelectedCategoryContent(kidsCategoriesContent?.sports);
                }
                break;
            case '新生児服・乳児服(0歳～2歳)':
                if (selectedBlackNav === 'baby') {
                    setSelectedCategoryContent(
                        babyCategoriesContent?.underTwoYears
                    );
                }
                break;
            case '乳幼児服(6ヶ月～5歳)':
                if (selectedBlackNav === 'baby') {
                    setSelectedCategoryContent(
                        babyCategoriesContent?.underFiveYears
                    );
                }
                break;
            case 'ヒートテック':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'エアリズム':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'UNIQLO : C':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'Uniqlo U':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'UNIQLO and PRINCESSE tam・tam':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'UNIQLO x Marimekko':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case '期間限定価格商品':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case '値下げ商品':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case '今週の新作':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case '予約販売商品':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case '近日販売予定の商品':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'カスタムオーダー':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'ランキング':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'UT':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'UNIQLO x ANYA HINDMARCH':
                setIsSelectedCategory(false);
                noPathError();
                break;
            case 'Uniqlo and Mame Kurogouchi':
                setIsSelectedCategory(false);
                noPathError();
                break;
        }
    }

    return (
        <Wrapper>
            <div
                className={`header-category ${
                    !searchMenuInitialState &&
                    (isSelectedCategory
                        ? 'header-category__slide-out-left'
                        : 'header-category__slide-in-right')
                }`}
                style={{
                    minHeight: !selectedCategory ? minHeight : 0,
                }}
            >
                {categories.map((category) => (
                    <Link
                        className={`${
                            searchMenuInitialState && 'header-category__fade-in'
                        }`}
                        to="#"
                        key={category.title}
                        onClick={() => {
                            setSelectedCategory(category.title);
                            setIsSelectedCategory(true);
                            getCategoryContent(category.title);
                            setSearchMenuInitialState(false);
                        }}
                    >
                        <div className="header-category-item">
                            <PrimaryImage
                                alt={category.title}
                                url={category.imgUrl}
                                bgColor="#f4f4f4"
                            />
                            <p>{category.title}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div
                className={`selected-category__container ${
                    isSelectedCategory
                        ? 'selected-category__slide-in-left'
                        : !searchMenuInitialState
                        ? 'selected-category__slide-out-right'
                        : 'selected-category__hide'
                }`}
            >
                <div className="selected-category__wrap">
                    <div className="selected-category__title">
                        <button onClick={() => setIsSelectedCategory(false)}>
                            <LeftArrow />
                        </button>
                        <p>{selectedCategory}</p>
                    </div>
                    <div className="header-category">
                        {selectedCategoryContent?.map((category) => (
                            <Link
                                to="#"
                                key={category.title}
                                onClick={noPathError}
                            >
                                <div className="header-category-item">
                                    <PrimaryImage
                                        alt={category.title}
                                        url={category.imgUrl}
                                        bgColor="#f4f4f4"
                                    />
                                    <p>{category.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default HeaderCategory;
