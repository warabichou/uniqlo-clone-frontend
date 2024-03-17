import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Footer';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

type linkListType = {
    id: number;
    url: string;
    title: string;
};

const linkList: linkListType[] = [
    {
        id: 1,
        url: '#',
        title: '会員情報',
    },
    {
        id: 2,
        url: '#',
        title: 'お買い物ガイド',
    },
    {
        id: 3,
        url: '#',
        title: '交換・返品',
    },
    {
        id: 4,
        url: '#',
        title: '特定商取引法に基づく表示',
    },
    {
        id: 5,
        url: '#',
        title: 'お問い合わせ',
    },
    {
        id: 6,
        url: '#',
        title: '利用規約',
    },
    {
        id: 7,
        url: '#',
        title: 'プライバシーポリシー',
    },
    {
        id: 8,
        url: '#',
        title: '推奨環境',
    },
    {
        id: 9,
        url: '#',
        title: 'プレスリリース',
    },
    {
        id: 10,
        url: '#',
        title: '企業情報',
    },
    {
        id: 11,
        url: '#',
        title: '採用情報',
    },
    {
        id: 12,
        url: '#',
        title: 'Language',
    },
];

type brandListType = {
    id: number;
    url: string;
    title: string;
};

const brandList: brandListType[] = [
    {
        id: 1,
        url: 'https://www.gu-global.com/jp/ja/',
        title: 'ジーユー',
    },
    {
        id: 2,
        url: 'https://www.theory.co.jp/',
        title: 'セオリー',
    },
    {
        id: 3,
        url: 'https://www.plst.com/jp/ja/',
        title: 'プラステ',
    },
];

type mediaListType = {
    id: number;
    iconUrl: string;
    linkUrl: string;
    title: string;
};

const mediaList: mediaListType[] = [
    {
        id: 1,
        iconUrl: 'https://asset.uniqlo.com/g/icons/facebook_v2.svg',
        linkUrl: 'https://www.facebook.com/uniqlo/',
        title: 'facebook',
    },
    {
        id: 2,
        iconUrl: 'https://asset.uniqlo.com/g/icons/twitter_v2.svg',
        linkUrl: 'https://line.me/ti/p/%40uniqlo',
        title: 'twitter',
    },
    {
        id: 3,
        iconUrl: 'https://asset.uniqlo.com/g/icons/line_v2.svg',
        linkUrl: 'https://www.instagram.com/uniqlo/',
        title: 'line',
    },
    {
        id: 4,
        iconUrl: 'https://asset.uniqlo.com/g/icons/instagram_v2.svg',
        linkUrl: 'https://www.youtube.com/user/UNIQLO',
        title: 'instagram',
    },
    {
        id: 5,
        iconUrl: 'https://asset.uniqlo.com/g/icons/youtube_v2.svg',
        linkUrl: 'https://www.youtube.com/user/UNIQLO',
        title: 'youtube',
    },
    {
        id: 6,
        iconUrl: 'https://asset.uniqlo.com/g/icons/tiktok.svg',
        linkUrl: 'https://www.tiktok.com/@uniqlo_jp',
        title: 'tikTok',
    },
];

const Footer = (): JSX.Element => {
    const { noPathError } = useGetCustomToast();

    return (
        <Wrapper>
            <div className="footer-link-container">
                <ul>
                    {linkList?.map((item) => (
                        <li key={item.title} onClick={noPathError}>
                            <Link to={item.url}>
                                <p>{item.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="footer-link-group">
                    <p className="footer-link-group__title">
                        グループブランド オンラインストア
                    </p>
                    <ul>
                        {brandList?.map((item) => (
                            <li key={item.title}>
                                <Link to={item.url}>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <hr className="footer-border" />

            <div className="footer-bottom">
                <p>Copyright © UNIQLO Co., Ltd. All rights reserved.</p>
                <div className="footer-bottom__social-media">
                    {mediaList?.map((item) => (
                        <Link
                            key={item.title}
                            to={item.linkUrl}
                            target="_blank"
                        >
                            <img src={item.iconUrl} alt={item.title} />
                        </Link>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Footer;
