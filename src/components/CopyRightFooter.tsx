import Wrapper from '../assets/wrappers/CopyRightFooter';
import UniqloIcon from '../assets/uniqlo-icon.svg?react';
import GUIcon from '../assets/gu-icon.svg?react';
import { Link } from 'react-router-dom';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

const CopyRightFooter = (): JSX.Element => {
    const { noPathError } = useGetCustomToast();

    return (
        <Wrapper>
            <footer>
                <div className="link">
                    <span className="link-container">
                        <UniqloIcon />
                        <Link
                            to="#"
                            className="login-link-text"
                            onClick={noPathError}
                        >
                            利用規約
                        </Link>
                        <span className="link-mark">|</span>
                        <Link
                            to="#"
                            className="login-link-text"
                            onClick={noPathError}
                        >
                            プライバシーポリシー
                        </Link>
                    </span>

                    <span className="link-container">
                        <GUIcon />
                        <Link
                            to="#"
                            className="login-link-text"
                            onClick={noPathError}
                        >
                            利用規約
                        </Link>
                        <span className="link-mark">|</span>
                        <Link
                            to="#"
                            className="login-link-text"
                            onClick={noPathError}
                        >
                            プライバシーポリシー
                        </Link>
                    </span>
                </div>
                <p>
                    Copyright © UNIQLO Co., Ltd. All rights reserved. |
                    Copyright © G.U. CO., Ltd. All rights reserved.
                </p>
            </footer>
        </Wrapper>
    );
};

export default CopyRightFooter;
