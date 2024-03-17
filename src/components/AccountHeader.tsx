import Wrapper from '../assets/wrappers/AccountHeader';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg?react';
import Account from '../assets/account.svg?react';

const AccountHeader = (): JSX.Element => {
    return (
        <Wrapper>
            <header>
                <nav className="header-left">
                    <Link to="/women">
                        <Logo />
                    </Link>
                </nav>
                <Link to="/login">
                    <nav className="header-right">
                        <Account />
                        <p>アカウント</p>
                    </nav>
                </Link>
            </header>
        </Wrapper>
    );
};

export default AccountHeader;
