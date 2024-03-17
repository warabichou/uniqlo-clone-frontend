import Wrapper from '../assets/wrappers/BottomNav';
import Home from '../assets/home.svg?react';
import Search from '../assets/bottom-search.svg?react';
import User from '../assets/bottom-user.svg?react';
import { Link } from 'react-router-dom';
import { SearchMenu } from '.';
import useStore from '../store/store';
import {
    useGetWomenCategories,
    useGetWomenCategoriesContent,
} from '../services/apiWomen';
import {
    useGetMenCategories,
    useGetMenCategoriesContent,
} from '../services/apiMen';
import {
    useGetKidsCategories,
    useGetKidsCategoriesContent,
} from '../services/apiKids';
import {
    useGetBabyCategories,
    useGetBabyCategoriesContent,
} from '../services/apiBaby';

const BottomNav = (): JSX.Element => {
    const { setSearchMenuOpen, isSearchMenuOpen } = useStore();
    const { data: womenCategories } = useGetWomenCategories();
    const { data: menCategories } = useGetMenCategories();
    const { data: kidsCategories } = useGetKidsCategories();
    const { data: babyCategories } = useGetBabyCategories();
    const { data: womenCategoriesContent } = useGetWomenCategoriesContent();
    const { data: menCategoriesContent } = useGetMenCategoriesContent();
    const { data: kidsCategoriesContent } = useGetKidsCategoriesContent();
    const { data: babyCategoriesContent } = useGetBabyCategoriesContent();

    return (
        <Wrapper>
            <div className="bottom-nav-container">
                <Link to="/women" className="bottom-nav__icon ">
                    <Home />
                </Link>
                <div
                    className="bottom-nav__icon bottom-nav__icon-big"
                    onClick={() => setSearchMenuOpen(true)}
                >
                    <Search />
                </div>
                <Link to="/login" className="bottom-nav__icon">
                    <User />
                </Link>
            </div>
            {isSearchMenuOpen && (
                <SearchMenu
                    womenCategories={womenCategories}
                    womenCategoriesContent={womenCategoriesContent}
                    menCategories={menCategories}
                    menCategoriesContent={menCategoriesContent}
                    kidsCategories={kidsCategories}
                    kidsCategoriesContent={kidsCategoriesContent}
                    babyCategories={babyCategories}
                    babyCategoriesContent={babyCategoriesContent}
                />
            )}
        </Wrapper>
    );
};

export default BottomNav;
