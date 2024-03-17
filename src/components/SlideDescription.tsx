import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/SlideDescription';
import { VideoCarouselType } from '../types';

const SlideDescription = ({
    slide,
}: {
    slide: VideoCarouselType;
}): JSX.Element => {
    const [number, setNumber] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    useEffect(() => {
        if (slide.price?.toString().includes('点')) {
            const priceStr = slide.price.toString().split('点');
            const number = priceStr[0];
            const price = priceStr[1];
            setNumber(`${number}点 ￥`);
            setPrice(price);
        }
    }, [slide.price]);

    if (slide.slideType === 'button') {
        return (
            <Wrapper>
                <div className="media-banner__shadow"></div>
                <div className="description-container">
                    <div className="media-banner__button-type">
                        <h2
                            className="media-banner__product-description"
                            dangerouslySetInnerHTML={{
                                __html: slide.productDescription,
                            }}
                        ></h2>
                        <div
                            className="media-banner__product-feature"
                            dangerouslySetInnerHTML={{
                                __html: slide.productFeature,
                            }}
                        ></div>
                        <button>特集を見る</button>
                    </div>
                    <p className="media-banner__model-name">
                        {slide.modelName}
                    </p>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div className="media-banner__shadow"></div>
            <div className="description-container">
                <div className="media-banner__normal-type">
                    {slide.productMark && (
                        <img
                            className="media-banner__product-mark"
                            src={slide.productMark}
                        />
                    )}
                    <h2
                        className="media-banner__product-description"
                        dangerouslySetInnerHTML={{
                            __html: slide.productDescription,
                        }}
                    ></h2>
                    <div
                        className="media-banner__product-feature"
                        dangerouslySetInnerHTML={{
                            __html: slide.productFeature,
                        }}
                    ></div>
                    {slide.price && (
                        <div className="media-banner__price">
                            <div className="media-banner__price-wrap">
                                <p
                                    className={`media-banner__price-mark ${
                                        slide.slideType === 'white-price' &&
                                        'media-banner__price-white'
                                    } ${
                                        number.length > 0 &&
                                        'media-banner__price-mark-fix'
                                    }    
                                    `}
                                >
                                    {!slide.price.toString().includes('点')
                                        ? '￥'
                                        : number}
                                </p>
                                <p
                                    className={`media-banner__price-text ${
                                        slide.slideType === 'white-price' &&
                                        'media-banner__price-white'
                                    }`}
                                >
                                    {!slide.price.toString().includes('点')
                                        ? slide.price.toLocaleString('ja-JP')
                                        : price}
                                </p>
                            </div>

                            {slide.priceDescription && (
                                <p className="media-banner__price-description">
                                    {slide.priceDescription}
                                </p>
                            )}
                        </div>
                    )}
                    {slide.copyright && (
                        <p
                            className={`media-banner__product-copyright ${
                                !slide.priceDescription &&
                                slide.price &&
                                'media-banner__product-copyright-mt'
                            }`}
                        >
                            {slide.copyright}
                        </p>
                    )}
                </div>
                <p className="media-banner__model-name">{slide.modelName}</p>
            </div>
        </Wrapper>
    );
};

export default SlideDescription;
