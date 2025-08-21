import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

export const FormGroup = styled.div`
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

export const ResponsiveFormGroup = styled(FormGroup)`
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

// Toggle Switch Components
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
