import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #f1f1f1;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Header>
        <h1>Welcome to our Landing Page</h1>
      </Header>
      <Main>
        <p>Your main content goes here.</p>
      </Main>
      <Footer>
        <p>© 2023 Your Company</p>
      </Footer>
    </Container>
  );
}