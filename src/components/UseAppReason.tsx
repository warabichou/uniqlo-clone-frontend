import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/UseAppReason';

const UseAppReason = () => {
    return (
        <Wrapper>
            <div className="use-app-reason">
                <header>
                    <h2>アプリな理由</h2>
                </header>

                <div className="use-app-reason__link-group">
                    <Link to="#">
                        <img
                            alt="アプリ会員限定価格"
                            src="https://im.uniqlo.com/global-cms/spa/resfaa6b490160bc5cad795424833827383fr.jpg"
                        />
                        <div className="use-app-reason__text-content">
                            <p>アプリ会員限定価格</p>
                            <p>
                                レジで会員証をスキャンするだけで、お得な価格でお買い物。
                            </p>
                        </div>
                    </Link>
                    <Link to="#">
                        <img
                            alt="MySize ASSIST"
                            src="https://im.uniqlo.com/global-cms/spa/resa0224e3119a1234504cfcc09c1b36243fr.jpg"
                        />
                        <div className="use-app-reason__text-content">
                            <p>MySize ASSIST</p>
                            <p>
                                カメラ機能が登場。カンタンな質問に答えて、自分にあうおすすめのサイズを見つけよう。
                            </p>
                        </div>
                    </Link>
                    <Link to="#">
                        <img
                            alt="ORDER & PICK"
                            src="https://im.uniqlo.com/global-cms/spa/res0c6461ab7a8d6e7e07078bfa7bdbe639fr.jpg"
                        />
                        <div className="use-app-reason__text-content">
                            <p>ORDER & PICK</p>
                            <p>
                                アプリで注文、最短1時間でお店で商品を受取れる。オンラインストアに在庫がなくても店舗で在庫を見つけて商品を購入できます。
                            </p>
                        </div>
                    </Link>
                </div>

                <Link
                    to="https://www.uniqlo.com/jp/ja/special-feature/app"
                    target="_blank"
                    className="use-app-reason__link"
                >
                    <p>ユニクロアプリをもっと詳しく見る</p>
                </Link>
            </div>
        </Wrapper>
    );
};

export default UseAppReason;
