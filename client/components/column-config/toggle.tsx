import React from 'react';
import { ToggleContainer, ToggleLabel, ToggleInput, ToggleSlider } from './style';

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export const Toggle: React.FC<ToggleProps> = ({ id, checked, onChange, label }) => {
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
