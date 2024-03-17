import Wrapper from '../assets/wrappers/PrimaryLinkButton';
import { Link } from 'react-router-dom';

type PrimaryLinkButton = {
    buttonLink: string;
    buttonText: string;
    isBlank?: boolean;
};

const PrimaryLinkButton = ({
    buttonLink,
    buttonText,
    isBlank = false,
}: PrimaryLinkButton): JSX.Element => {
    return (
        <Wrapper>
            <Link
                to={buttonLink}
                target={`${isBlank ? '_blank' : '_self'}`}
                className="primary-link-button"
            >
                <p>{buttonText}</p>
            </Link>
        </Wrapper>
    );
};

export default PrimaryLinkButton;
