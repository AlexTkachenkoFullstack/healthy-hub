import React from 'react';
import {
  PeriodContainer,
  Title,
  Span,
  ProteinAndFatContainer,
} from './TitlePeriod.styled';

const TitlePeriod = ({ product }) => {
  if (product.length === 0 || product === undefined) {
    return (
      <PeriodContainer>
        <Title>
          Carbonohidrates:<Span>0</Span>
        </Title>
        <ProteinAndFatContainer>
          <Title>
            Protein:<Span>0</Span>
          </Title>
          <Title>
            Fat:<Span>0</Span>
          </Title>
        </ProteinAndFatContainer>
      </PeriodContainer>
    );
  }

  const sumCarbohydrates = product.reduce((acc, item) => {
    return acc + item.carbonohidrates;
  }, 0);

  const sumProtein = product.reduce((acc, item) => {
    return acc + item.protein;
  }, 0);

  const sumFat = product.reduce((acc, item) => {
    return acc + item.fat;
  }, 0);



  return (
    <PeriodContainer>
      <Title>
        Carbonohidrates:<Span>{sumCarbohydrates}</Span>
      </Title>
      <ProteinAndFatContainer>
        <Title>
          Protein:<Span>{sumProtein}</Span>
        </Title>
        <Title>
          Fat:<Span>{sumFat}</Span>
        </Title>
      </ProteinAndFatContainer>
    </PeriodContainer>
  );
};

export default TitlePeriod;
