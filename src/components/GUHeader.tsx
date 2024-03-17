import Wrapper from '../assets/wrappers/GUHeader';
import { Link } from 'react-router-dom';
import UniqloIcon from '../assets/uniqlo-icon.svg?react';
import GUIcon from '../assets/gu-icon.svg?react';
import { useGetCustomToast } from '../hooks/useGetCustomToast';
import Account from '../assets/account.svg?react';

type GUHeaderType = {
    hasRightIcon?: boolean;
};

const GUHeader = ({ hasRightIcon }: GUHeaderType): JSX.Element => {
    const { noPathError } = useGetCustomToast();

    return (
        <Wrapper>
            <header>
                <nav className="header-left">
                    <Link to="/">
                        <UniqloIcon />
                    </Link>
                    <Link to="#" onClick={noPathError}>
                        <GUIcon />
                    </Link>
                </nav>

                {hasRightIcon && (
                    <nav className="header-right">
                        <Account />
                        <p>会員情報</p>
                    </nav>
                )}
            </header>
        </Wrapper>
    );
};

export default GUHeader;
