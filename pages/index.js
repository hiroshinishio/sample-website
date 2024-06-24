import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) { 
    padding: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default function Home() {
  const [message, setMessage] = useState('');

  return (
    <Container>
      <h1>Welcome to Our Landing Page</h1>
      <Button onClick={() => setMessage('Button Clicked!')}>Click Me</Button>
      {message && <p>{message}</p>}
    </Container>
  );
}