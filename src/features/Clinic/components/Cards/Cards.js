import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

export const StyledCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 24px 20px;
  overflow-y: scroll;
  max-height: 65vh;
  padding-right: 44px;

  @media screen and (max-width: 769px) {
    padding-right: 20px;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #dce0ec;
    opacity: 0.32;
  }

  &::-webkit-scrollbar-thumb {
    opacity: 0.56;
    background-color: #bac3db;
    border-radius: 8px;
  }

  @media screen and (max-width: 650px) {
    padding-right: 0;
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    grid-gap: 0 0;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const Cards = function ({ cards }) {
  return (
    <StyledCardsWrapper>
      {
        cards.length ? cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            status={card.status}
            time={card.time}
            message={card.message}
            avatar={card.avatar}
            type={card.type}
          />
        ))
          : ''
      }
    </StyledCardsWrapper>
  );
};

export default Cards;
