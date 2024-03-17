import { useState } from 'react';
import Wrapper from '../assets/wrappers/TrendWordsHistory';
import WhiteTrash from '../assets/white-trash.svg?react';
import BlackTrash from '../assets/black-trash.svg?react';
import Close from '../assets/close.svg?react';
import { Link } from 'react-router-dom';
import { useGetCustomToast } from '../hooks/useGetCustomToast';

type TrendWordsHistoryType = {
    closeMenu: () => void;
    isSp?: boolean;
};

type TrendWord = {
    id: number;
    title: string;
};

const TrendWordsData: TrendWord[] = [
    {
        id: 1,
        title: 'アウター',
    },
    {
        id: 2,
        title: 'ウルトラライトダウン',
    },
    {
        id: 3,
        title: 'UNIQLO x Marimekko',
    },
];

const TrendWordsHistory = ({
    closeMenu,
    isSp = true,
}: TrendWordsHistoryType): JSX.Element => {
    const { noPathError } = useGetCustomToast();
    const [fakeData, setFakeData] = useState<TrendWord[]>(TrendWordsData);

    const deleteItemHandler = (id: number) => {
        setFakeData(fakeData.filter((item) => item.id !== id));
    };

    const clearHandler = () => {
        setFakeData([]);
    };

    return (
        <Wrapper>
            <div className="trend-words-history__title">
                <h5 onClick={closeMenu}>検索履歴</h5>
                <div className="trend-words-history__title-icon">
                    {fakeData.length === 0 ? (
                        <WhiteTrash />
                    ) : (
                        <span onClick={clearHandler}>
                            <BlackTrash />
                        </span>
                    )}
                </div>
            </div>
            <div className="trend-words-history__items">
                {fakeData?.map((item) => (
                    <div
                        key={item.title}
                        className="trend-words-history__items-title"
                    >
                        <Link to="#" onClick={noPathError}>
                            {item.title}
                        </Link>
                        <span onClick={() => deleteItemHandler(item.id)}>
                            <Close />
                        </span>
                    </div>
                ))}
            </div>
            <div
                onClick={closeMenu}
                style={{ height: isSp ? '100%' : '100vh' }}
            ></div>
        </Wrapper>
    );
};

export default TrendWordsHistory;
