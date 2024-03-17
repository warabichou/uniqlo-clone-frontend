import Wrapper from '../assets/wrappers/SearchMenuHorizontalList';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { GridRowType } from '../types';

const SearchMenuHorizontalList = ({
    title,
    listData,
}: {
    title: string;
    listData?: GridRowType[];
}) => {
    return (
        <Wrapper>
            <h1 className="search-menu-horizontal-list__title">{title}</h1>
            <div className="search-menu-horizontal-list__container">
                {listData?.map((item) => (
                    <Link
                        to="#"
                        className="search-menu-horizontal-list__item"
                        key={item.title}
                    >
                        <div
                            className="search-menu-horizontal-list__item-img"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                            }}
                        >
                            {item.videoUrl && (
                                <ReactPlayer
                                    className="react-player"
                                    url={item.videoUrl}
                                    muted={true}
                                    loop={true}
                                    playing={true}
                                    playsinline={true}
                                />
                            )}
                        </div>

                        <div className="search-menu-horizontal-list__item-text">
                            <div className="search-menu-horizontal-list__item-text-title">
                                {item.title}
                            </div>
                            {item.description && (
                                <div className="search-menu-horizontal-list__item-text-description">
                                    {item.description}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </Wrapper>
    );
};

export default SearchMenuHorizontalList;
