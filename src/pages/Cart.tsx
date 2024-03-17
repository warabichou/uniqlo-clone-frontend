import Wrapper from '../assets/wrappers/Cart';
import {
    AccountHeader,
    CartHorizontalSlider,
    PolicyFooter,
    PrimaryLinkButton,
} from '../components';
import { useGetIsMediumScreen } from '../hooks/useGetIsMediumScreen';
import { useGetCartRankingList } from '../services/apiCommon';

const Cart = (): JSX.Element => {
    const isMediumScreen = useGetIsMediumScreen();
    const { data: cartRankingList } = useGetCartRankingList();

    return (
        <Wrapper>
            <AccountHeader />
            <div className="cart">
                <div className="cart-banner">
                    <img
                        alt="店舗受取送料無料"
                        src={
                            isMediumScreen
                                ? 'https://im.uniqlo.com/global-cms/spa/res727bb510935f9a9be0d8e95b7508e810fr.jpg'
                                : 'https://im.uniqlo.com/global-cms/spa/res003dcee0f5bb8082f8ceca3c37ebf8bdfr.jpg'
                        }
                    />
                </div>
                <h5>カート</h5>
                <p className="cart-text">カート内に商品がありません</p>
                <div className="cart-chat">
                    <img
                        alt="IQ Chatbot"
                        src="https://im.uniqlo.com/global-cms/spa/resbd18845fceeb11034a3223cdf7de921ffr.png"
                    />
                </div>
                <h1>こちらの商品はいかがですか？</h1>
                <CartHorizontalSlider
                    title="Men 売れ筋ランキング"
                    slidesData={cartRankingList}
                />
                <div className="cart__button-container">
                    <PrimaryLinkButton
                        buttonLink="/"
                        buttonText="お買い物を続ける"
                    />
                </div>
                <PolicyFooter />
            </div>
        </Wrapper>
    );
};

export default Cart;
