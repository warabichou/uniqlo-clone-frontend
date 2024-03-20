import Wrapper from '../assets/wrappers/PolicyFooter';
import { Link } from 'react-router-dom';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

const PolicyFooter = (): JSX.Element => {
    const { noPathError } = useGetCustomToast();

    return (
        <Wrapper>
            <footer>
                <div className="footer-container footer-container-link">
                    <Link to="#" onClick={noPathError}>
                        <p>特定商取引法に基づく表示</p>
                    </Link>
                    <Link to="#" onClick={noPathError}>
                        <p>交換・返品について</p>
                    </Link>
                </div>
                <hr />
                <div className="footer-container footer-container__copy-right">
                    <p>Copyright © UNIQLO Co., Ltd. All rights reserved.</p>
                </div>
            </footer>
        </Wrapper>
    );
};

export default PolicyFooter;
