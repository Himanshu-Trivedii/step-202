import React, { useState, KeyboardEvent, useEffect } from 'react';
import {
  ResponsiveColumnConfigFormContainer,
  ResponsiveFilterTags,
  ResponsiveFilterTag,
  FormLabel,
  FormInput,
  FilterSection,
  FilterInputGroup,
  TagRemove
} from './style';
import { ColumnConfig, LabelValue } from './types';
import { ColumnConfigRow } from './column-config-row';
import { ShimmerRow } from './shimmer';

interface ColumnConfigFormProps {
  onConfigChange?: (config: ColumnConfig) => void;
  initialConfig?: Partial<ColumnConfig>;
  isEdit?: boolean;
  columnTypes?: LabelValue[];
  columnId: string;
}

export const ColumnConfigForm: React.FC<ColumnConfigFormProps> = ({
  onConfigChange,
  initialConfig = {},
  isEdit = false,
  columnTypes = []
}) => {
  const [config, setConfig] = useState<ColumnConfig>({
    label: initialConfig?.label || '',
    columnName: initialConfig?.columnName || '',
    columnType: initialConfig?.columnType || 'string',
    filterable: initialConfig?.filterable || false,
    hidden: initialConfig?.hidden || false,
    searchable: initialConfig?.searchable || false,
    filterValues: initialConfig?.filterValues || []
  });

  const [filterInput, setFilterInput] = useState('');

  const updateConfig = (updates: Partial<ColumnConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange?.(newConfig);
  };

  const handleFilterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filterInput.trim()) {
      if (!(config?.filterValues || []).includes(filterInput.trim())) {
        updateConfig({
          filterValues: [...(config?.filterValues || []), filterInput.trim()]
        });
      }
      setFilterInput('');
    }
  };

  const removeFilterValue = (valueToRemove: string) => {
    updateConfig({
      filterValues: (config?.filterValues || []).filter(value => value !== valueToRemove)
    });
  };

  return (
    <ResponsiveColumnConfigFormContainer>
      {columnTypes.length ? (
        <ColumnConfigRow
          config={config}
          columnTypes={columnTypes}
          updateConfig={updateConfig}
          isEdit={((config?.columnName !== '') && isEdit)}
        />
      ) : <ShimmerRow /> }

      {(config?.filterable || false) && (
        <FilterSection>
          <FilterInputGroup>
            <FormLabel htmlFor='filter-input'>Filter Values</FormLabel>
            <FormInput
              id='filter-input'
              type='text'
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              onKeyDown={handleFilterKeyPress}
              style={{width: '33ch'}}
              placeholder="Type a value and press Enter to add"
            />
          </FilterInputGroup>

          {(config?.filterValues || []).length > 0 && (
            <ResponsiveFilterTags>
              {(config?.filterValues || []).map((value, index) => (
                <ResponsiveFilterTag key={index}>
                  {value}
                  <TagRemove
                    type='button'
                    onClick={() => removeFilterValue(value)}
                    aria-label={`Remove ${value}`}
                  >
                    ×
                  </TagRemove>
                </ResponsiveFilterTag>
              ))}
            </ResponsiveFilterTags>
          )}
        </FilterSection>
      )}
    </ResponsiveColumnConfigFormContainer>
  );
};
