import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Registration Modal Styles
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

// Column Config Form Styles
export const ColumnConfigFormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const FormGroupBase = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 140px;
  flex: 1;
`;

export const FormGroupToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: auto;
  flex: 0 0 auto;
  margin-top: 24px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  display: block;
`;

export const FormInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background-color: #ffffff;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const FormSelect = styled.select`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 8px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 36px;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const FilterSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;

export const FilterInputGroup = styled.div`
  margin-bottom: 16px;
`;

export const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FilterTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background-color: #3b82f6;
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
`;

export const TagRemove = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

// Responsive versions
export const ResponsiveFormRow = styled(FormRow)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ResponsiveFormGroup = styled(FormGroupBase)`
  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const ResponsiveFormGroupToggle = styled(FormGroupToggle)`
  @media (max-width: 768px) {
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const ResponsiveColumnConfigFormContainer = styled(ColumnConfigFormContainer)`
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const ResponsiveFilterTags = styled(FilterTags)`
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ResponsiveFilterTag = styled(FilterTag)`
  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

// Toggle Switch Component
export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ToggleLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleSlider = styled.div<{ checked: boolean }>`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${props => props.checked ? '#3b82f6' : '#d1d5db'};

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.checked ? '22px' : '2px'};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: left 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// Toggle Switch component as styled component
interface ToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ id, checked, onChange, label }) => {
  return (
    <ToggleContainer>
      <ToggleLabel htmlFor={id}>
        <ToggleInput
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <ToggleSlider checked={checked} />
        {label}
      </ToggleLabel>
    </ToggleContainer>
  );
};

// Shimmer animation
const shimmerAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const ShimmerBlock = styled.div<{ width?: string; height?: string }>`
  border-radius: 8px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '40px'};
  background: linear-gradient(
    90deg,
    #f3f3f3 25%,
    #e0e0e0 50%,
    #f3f3f3 75%
  );
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1.5s infinite linear;
`;
