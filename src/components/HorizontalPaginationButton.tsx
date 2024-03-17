import Wrapper from '../assets/wrappers/HorizontalPaginationButton';
import { RxTriangleRight } from 'react-icons/rx';
import { BsPause } from 'react-icons/bs';

type HorizontalPaginationButtonType = {
    circleRef: React.LegacyRef<SVGCircleElement> | undefined;
    toggleAnimation: () => void;
    isPaused: boolean;
    stopAutoplay: () => void;
    startAutoplay: () => void;
};

const HorizontalPaginationButton = ({
    circleRef,
    toggleAnimation,
    isPaused,
    stopAutoplay,
    startAutoplay,
}: HorizontalPaginationButtonType): JSX.Element => {
    return (
        <Wrapper>
            <button
                className="control-button"
                onClick={() => {
                    toggleAnimation();
                    {
                        isPaused ? startAutoplay() : stopAutoplay();
                    }
                }}
            >
                <svg width="25" height="25">
                    <circle
                        ref={circleRef}
                        cx="12.5"
                        cy="12.5"
                        r="10"
                        className={`pagination-button__animation ${
                            isPaused ? 'paused' : ''
                        }`}
                    ></circle>
                </svg>
                <span className="pagination-button__icon">
                    {isPaused ? <RxTriangleRight /> : <BsPause />}
                </span>
            </button>
        </Wrapper>
    );
};

export default HorizontalPaginationButton;
