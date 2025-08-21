import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const containerStyle = css`
  min-height: 100vh;
  background: linear-gradient(to bottom right, rgb(192, 132, 252), rgb(96, 165, 250), rgb(34, 211, 238));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (min-width: 640px) {
    padding: 32px;
  }
`;

export const mainContainerStyle = css`
  width: 100%;
  max-width: 1400px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const flexContainerStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 750px;
  margin-left: -1px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const logoStyle = css`
  display: block;
  width: 133px;
  height: 160px;
`;

export const formSectionStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (min-width: 640px) {
    padding: 32px;
  }
`;

export const formWrapperStyle = css`
  width: 100%;
  max-width: 448px;
`;

export const illustrationSectionStyle = css`
  flex: 1;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const mobileHintStyle = css`
  background: linear-gradient(to bottom right, rgb(17, 24, 39), rgb(31, 41, 55));
  padding: 24px;
  text-align: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const mobileHintContentStyle = css`
  color: white;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    color: rgb(209, 213, 219);
    font-size: 14px;
  }
`;

// LOGIN


export const loginContainerStyle = css`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    gap: 24px;
  }
`;

export const loginHeaderStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const loginTitleStyle = css`
  font-size: 24px;
  font-weight: 700;
  color: rgb(17, 24, 39);
  line-height: 1.2;
  margin-right: -1px;

  @media (min-width: 640px) {
    font-size: 30px;
  }
`;

export const loginSubtitleStyle = css`
  color: rgb(75, 85, 99);
  font-size: 14px;

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

export const loginFormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const loginInputGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const loginInputStyle = css`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid rgb(229, 231, 235);
  background: rgb(249, 250, 251);
  font-size: 14px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    background: white;
    border-color: rgb(156, 163, 175);
  }

  @media (min-width: 640px) {
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
  }
`;

export const loginPasswordGroupStyle = css`
  position: relative;
`;

export const loginPasswordInputStyle = css`
  ${loginInputStyle}
  padding-right: 40px;

  @media (min-width: 640px) {
    padding-right: 48px;
  }
`;

export const loginPasswordToggleStyle = css`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgb(156, 163, 175);
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: rgb(75, 85, 99);
  }

  @media (min-width: 640px) {
    right: 12px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (min-width: 640px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const loginForgotPasswordStyle = css`
  text-align: right;
  
  a {
    font-size: 14px;
    color: rgb(75, 85, 99);
    text-decoration: none;

    &:hover {
      color: rgb(17, 24, 39);
    }
  }
`;

export const loginSubmitButtonStyle = css`
  width: 100%;
  height: 40px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgb(31, 41, 55);
  }

  @media (min-width: 640px) {
    height: 48px;
    font-size: 16px;
  }
`;

export const loginSignUpLinkStyle = css`
  text-align: center;
  font-size: 14px;
  color: rgb(75, 85, 99);
  margin-top: 24px;

  button {
    color: black;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const loginOverlayStyle = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Make sure it's on top */
`;

export const loginModalWrapper = css`
  background: white;
  border-radius: 10px;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;


// signup 


export const signupContainerStyle = css`
  width: 100%;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 640px) {
    gap: 24px;
  }
`;

export const signupHeaderStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const signupTitleStyle = css`
  font-size: 24px;
  font-weight: 700;
  color: rgb(17, 24, 39);
  line-height: 1.2;
  margin-right: -1px;

  @media (min-width: 640px) {
    font-size: 30px;
  }
`;

export const signupSubtitleStyle = css`
  color: rgb(75, 85, 99);
  font-size: 14px;

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

export const signupFormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const signupInputGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const signupInputStyle = css`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid rgb(229, 231, 235);
  background: rgb(249, 250, 251);
  font-size: 14px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    background: white;
    border-color: rgb(156, 163, 175);
  }

  @media (min-width: 640px) {
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
  }
`;

export const signupPasswordGroupStyle = css`
  position: relative;
`;

export const signupPasswordInputStyle = css`
  ${signupInputStyle}
  padding-right: 40px;

  @media (min-width: 640px) {
    padding-right: 48px;
  }
`;

export const signupPasswordToggleStyle = css`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgb(156, 163, 175);
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: rgb(75, 85, 99);
  }

  @media (min-width: 640px) {
    right: 12px;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (min-width: 640px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const signupSubmitButtonStyle = css`
  width: 100%;
  height: 40px;
  background: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: rgb(31, 41, 55);
  }

  @media (min-width: 640px) {
    height: 48px;
    font-size: 16px;
  }
`;

export const signupSignInLinkStyle = css`
  text-align: center;
  font-size: 14px;
  color: rgb(75, 85, 99);
  margin-top: 24px;

  button {
    color: black;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

 // Vector


export const vectorContainerStyle = css`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 32px;
  overflow: hidden;
  background-image: url('https://cdn.builder.io/api/v1/image/assets%2F03b034723f4143d6871d381f98b45e22%2Ff21d279c8bc04f039d5ad8d76e1a9820?format=webp&width=800');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const vectorOverlayStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const vectorContentStyle = css`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 448px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const vectorTitleStyle = css`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
`;

export const vectorDescriptionStyle = css`
  color: rgb(229, 231, 235);
  font-size: 14px;
  line-height: 1.64;

  h3 {
    margin: 0;

    strong {
      font-weight: 700;

      span {
        display: block;
      }
    }
  }
`;


// Logout

interface Theme {
  spacing: string[];
  borderRadius: { md: string };
  colors: {
    border: string;
    foreground: string;
    muted: string;
    destructive: string;
    destructiveForeground: string;
    mutedForeground: string;
  };
}

export const CancelButton = styled.button<{ theme: Theme; disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: 14px;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.muted};
  }
`;

export const LogoutButton = styled.button<{ theme: Theme; disabled?: boolean }>`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: 14px;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background-color: ${({ theme }) => theme.colors.destructive};
  color: ${({ theme }) => theme.colors.destructiveForeground};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.8 : 1};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.destructive}dd;
  }
`;

export const LogoutText = styled.p<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin: 0 0 ${({ theme }) => theme.spacing[6]} 0;
  font-size: 14px;
  line-height: 1.5;
`;

export const LoadingSpinner = styled.svg<{ theme: Theme }>`
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Registration

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 56rem;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
`;

export const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

export const ModalSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const ModalBadge = styled.div`
  background-color: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: color 0.2s ease;

  &:hover {
    color: #374151;
  }
`;

export const ProgressBar = styled.div`
  padding: 1.5rem;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepCircle = styled.div<{ isActive: boolean; isCompleted: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  ${props => props.isCompleted && css`
    background-color: #2563eb;
    border-color: #2563eb;
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  `}

  ${props => props.isActive && !props.isCompleted && css`
    background-color: #eff6ff;
    border-color: #2563eb;
    color: #2563eb;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  `}

  ${props => !props.isActive && !props.isCompleted && css`
    background-color: white;
    border-color: #d1d5db;
    color: #9ca3af;
    transform: scale(1);
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  ${props => (props.isActive || props.isCompleted) && css`
    &::before {
      transform: translateX(100%);
    }
  `}
`;

export const StepInfo = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`;

export const StepTitle = styled.p<{ isActive: boolean; isCompleted: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  color: ${props => (props.isActive || props.isCompleted) ? '#111827' : '#6b7280'};
`;

export const StepDescription = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
  max-width: 6rem;
`;

export const ProgressLine = styled.div<{ isCompleted: boolean }>`
  flex: 1;
  height: 3px;
  margin: 0 2rem;
  min-width: 100px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #e5e7eb;
  border-radius: 2px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.isCompleted ? '100%' : '0%'};
    background-color: #2563eb;
    border-radius: 2px;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const FormContainer = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const Input = styled.input`
  height: 2.75rem;
  padding: 0 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &:hover {
    border-color: #60a5fa;
  }
`;

export const Select = styled.select`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &:hover {
    border-color: #60a5fa;
  }
`;

export const HelpText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
`;

export const TableHeader = styled.div`
  margin-bottom: 1rem;
`;

export const TableHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr 0.5fr 0.5fr 0.25fr;
  gap: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableContent = styled.div`
  max-height: 24rem;
  overflow-y: auto;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.75fr 0.5fr 0.5fr 0.25fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Switch = styled.div<{ checked: boolean }>`
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${props => props.checked ? '#2563eb' : '#d1d5db'};

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.checked ? '18px' : '2px'};
    width: 1.25rem;
    height: 1.25rem;
    background: white;
    border-radius: 50%;
    transition: left 0.2s ease;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'ghost'; disabled?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  position: relative;
  overflow: hidden;

  ${props => props.variant === 'primary' && css`
    background-color: #2563eb;
    color: white;

    &:hover:not(:disabled) {
      background-color: #1d4ed8;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover:not(:disabled) {
      background-color: #f9fafb;
      border-color: #9ca3af;
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'ghost' && css`
    background: none;
    color: #6b7280;

    &:hover:not(:disabled) {
      color: #111827;
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}

  ${props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  `}
`;

export const RemoveButton = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: #ef4444;
  }
`;

export const Footer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompletionContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const CompletionIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #dcfce7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

export const CompletionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem 0;
`;

export const CompletionText = styled.p`
  color: #6b7280;
  margin: 0;
`;
