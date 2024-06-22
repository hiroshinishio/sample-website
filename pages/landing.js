import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

const Landing = () => (
  <HeroSection>
    <Title>Welcome to Our Product</Title>
    <Subtitle>Your journey starts here. Let's build something amazing together.</Subtitle>
  </HeroSection>
);

export default Landing;