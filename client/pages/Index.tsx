import { useState } from "react";
import RegistrationStepperModal from "../components/registration/registration";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 32rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const StartButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

export default function Index() {
  const [showRegistration, setShowRegistration] = useState(true);

  return (
    <Container>
      <ContentWrapper>
        <Title>Welcome to Your Application</Title>
        <Description>
          Get started by setting up your organization and configuring your data structure.
        </Description>
        
        {!showRegistration && (
          <StartButton onClick={() => setShowRegistration(true)}>
            Start Registration
          </StartButton>
        )}
      </ContentWrapper>
      
      {showRegistration && <RegistrationStepperModal />}
    </Container>
  );
}
