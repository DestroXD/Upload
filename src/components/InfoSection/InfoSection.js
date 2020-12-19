import React from 'react';
import {Link} from 'react-router-dom';
import {Container , Button} from '../../globalStyles';
import {
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const infoSection = ({ primary, lightBg ,imgStart, lightTopLine, lightTextDesc , buttonlabel, description, headline, lightText, topLine, img, alt, start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/SignUp'>
                                    <Button big fontBig primary={primary}>
                                        {buttonlabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default infoSection;
