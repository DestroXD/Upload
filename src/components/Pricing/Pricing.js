import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Program</PricingHeading>
          <PricingContainer>
            <PricingCard to='/SignUp'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>Rp.100.000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Boxing Area</PricingCardFeature>
                  <PricingCardFeature>Cardio Environment</PricingCardFeature>
                  <PricingCardFeature>Fitness Facilities</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Program</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/SignUp'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Chalisthenic</PricingCardPlan>
                <PricingCardCost>Rp.250.000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Chalisthenic Trainer</PricingCardFeature>
                  <PricingCardFeature>Gymnastics Facilities</PricingCardFeature>
                  <PricingCardFeature>1 month program</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Program</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/SignUp'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Body Building</PricingCardPlan>
                <PricingCardCost>Rp.500.000</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Trainer</PricingCardFeature>
                  <PricingCardFeature>Full Facilities</PricingCardFeature>
                  <PricingCardFeature>Free Suplement</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Program</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
