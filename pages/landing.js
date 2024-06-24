import React from 'react';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <NavList>
            <NavItem><a href="#">Home</a></NavItem>
            <NavItem><a href="#">Features</a></NavItem>
            <NavItem><a href="#">Contact</a></NavItem>
          </NavList>
        </Nav>
      </Header>
      <HeroSection>
        <HeroText>
          <h1>Welcome to Our App</h1>
          <p>Your description here</p>
          <CTAButton>Get Started</CTAButton>
        </HeroText>
      </HeroSection>
      <FeaturesSection>
        <Feature>
          <h3>Feature 1</h3>
          <p>Detail about feature 1</p>
        </Feature>
        <Feature>
          <h3>Feature 2</h3>
          <p>Detail about feature 2</p>
        </Feature>
      </FeaturesSection>
      <Footer>
        <FooterText>© 2023 App Name. All rights reserved.</FooterText>
      </Footer>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background: #333;
  color: #fff;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: url('/static/hero-bg.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
`;

const HeroText = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CTAButton = styled.button`
  background: #0070f3;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  background: #f9f9f9;
  text-align: center;
`;

const Feature = styled.div`
  max-width: 300px;
  margin: 1rem;
`;

const Footer = styled.footer`
  background: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;