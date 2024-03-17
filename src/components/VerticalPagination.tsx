import Wrapper from '../assets/wrappers/VerticalPagination';

type VerticalPaginationType = {
    totalSlides: number;
    currentSlide: number;
};

const VerticalPagination = ({
    totalSlides,
    currentSlide,
}: VerticalPaginationType): JSX.Element => {
    const bulletElement = Array.from({ length: totalSlides }, (_, index) => (
        <span
            key={index}
            className={`bullet ${currentSlide === index + 1 && 'active'}`}
        ></span>
    ));
    return <Wrapper>{bulletElement}</Wrapper>;
};

export default VerticalPagination;
