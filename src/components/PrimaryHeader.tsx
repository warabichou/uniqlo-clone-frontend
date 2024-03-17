import Wrapper from '../assets/wrappers/PrimaryHeader';

type PrimaryHeaderType = {
    title: string;
};

const PrimaryHeader = ({ title }: PrimaryHeaderType): JSX.Element => {
    return (
        <Wrapper>
            <header>
                <h2>{title}</h2>
            </header>
        </Wrapper>
    );
};

export default PrimaryHeader;
