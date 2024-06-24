import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background: #333;
  color: #fff;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 2rem 0;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background: #333;
  color: #fff;
`;

export default function Home() {
  return (
    <Container>
      <Header>Sample Website</Header>
      <Main>
        <h1>Welcome to Our Landing Page</h1>
        <p>This is a simple landing page built with Next.js</p>
      </Main>
      <Footer>© 2023 Sample Website</Footer>
    </Container>
  );
}