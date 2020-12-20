import React from 'react';
import {homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
