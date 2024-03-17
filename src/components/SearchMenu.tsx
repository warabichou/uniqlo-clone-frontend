import Wrapper from '../assets/wrappers/SearchMenu';
import {
    Footer,
    HeaderCategory,
    TertiaryHorizontalSlider,
    SearchBottomMenu,
    SearchMenuHorizontalList,
    TopBlackHeader,
} from '.';
import { useGetIsSmallScreen } from '../hooks/useGetIsSmallScreen';
import { CategoriesType } from '../types';
import {
    useGetFromUNIQLOList,
    useGetRecommendedInfo,
    useGetNews,
    useGetSpecialCollection,
    useGetUTList,
    useGetShopInfo,
} from '../services/apiCommon';

const SearchMenu = ({
    womenCategories,
    womenCategoriesContent,
    menCategories,
    menCategoriesContent,
    kidsCategories,
    kidsCategoriesContent,
    babyCategories,
    babyCategoriesContent,
}: CategoriesType) => {
    const isSmallScreen = useGetIsSmallScreen();

    const { data: fromUNIQLOList } = useGetFromUNIQLOList();
    const { data: recommendedInfo } = useGetRecommendedInfo();
    const { data: news } = useGetNews();
    const { data: specialCollection } = useGetSpecialCollection();
    const { data: utList } = useGetUTList();
    const { data: shopInfo } = useGetShopInfo();

    return (
        <Wrapper>
            <TopBlackHeader />
            <div className="search-menu-container">
                <div className="search-menu-wrap">
                    <HeaderCategory
                        womenCategories={womenCategories}
                        womenCategoriesContent={womenCategoriesContent}
                        menCategories={menCategories}
                        menCategoriesContent={menCategoriesContent}
                        kidsCategories={kidsCategories}
                        kidsCategoriesContent={kidsCategoriesContent}
                        babyCategories={babyCategories}
                        babyCategoriesContent={babyCategoriesContent}
                    />
                    <hr />
                    {isSmallScreen ? (
                        <TertiaryHorizontalSlider
                            title="From UNIQLO"
                            slidesData={fromUNIQLOList}
                        />
                    ) : (
                        <SearchMenuHorizontalList
                            title="From UNIQLO"
                            listData={fromUNIQLOList}
                        />
                    )}
                    {isSmallScreen ? (
                        <TertiaryHorizontalSlider
                            title="おすすめの情報"
                            slidesData={recommendedInfo}
                        />
                    ) : (
                        <SearchMenuHorizontalList
                            title="おすすめの情報"
                            listData={recommendedInfo}
                        />
                    )}
                    {isSmallScreen ? (
                        <TertiaryHorizontalSlider
                            title="ニュース"
                            slidesData={news}
                        />
                    ) : (
                        <SearchMenuHorizontalList
                            title="ニュース"
                            listData={news}
                        />
                    )}
                    {isSmallScreen ? (
                        <TertiaryHorizontalSlider
                            title="特別コレクション"
                            slidesData={specialCollection}
                        />
                    ) : (
                        <SearchMenuHorizontalList
                            title="特別コレクション"
                            listData={specialCollection}
                        />
                    )}
                    {isSmallScreen ? (
                        <TertiaryHorizontalSlider
                            title="UT"
                            slidesData={utList}
                        />
                    ) : (
                        <SearchMenuHorizontalList
                            title="UT"
                            listData={utList}
                        />
                    )}
                    {isSmallScreen ? (
                        <TertiaryHorizontalSlider
                            title="店舗情報"
                            slidesData={shopInfo}
                        />
                    ) : (
                        <SearchMenuHorizontalList
                            title="店舗情報"
                            listData={shopInfo}
                        />
                    )}
                </div>
                <Footer />
            </div>
            <SearchBottomMenu />
        </Wrapper>
    );
};

export default SearchMenu;
