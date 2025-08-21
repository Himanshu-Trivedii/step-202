import React, { useState, KeyboardEvent } from 'react';
import {
  ResponsiveFormRow,
  ResponsiveFormGroup,
  ResponsiveFormGroupToggle,
  FormLabel,
  FormInput,
  FormSelect,
  ToggleSwitch,
  RemoveButton,
  FilterSection,
  FilterInputGroup,
  ResponsiveFilterTags,
  ResponsiveFilterTag,
  TagRemove,
} from './style';
import { X } from 'lucide-react';

interface ColumnConfig {
  label: string;
  columnName: string;
  columnType: string;
  filterable: boolean;
  hidden: boolean;
  searchable: boolean;
  filterValues: string[];
}

interface ColumnConfigRowProps {
  config: ColumnConfig;
  columnTypes: { label: string; value: string }[];
  updateConfig: (updates: Partial<ColumnConfig>) => void;
  isEdit: boolean;
  onRemove?: () => void;
}

export const ColumnConfigRow: React.FC<ColumnConfigRowProps> = ({
  config,
  columnTypes,
  updateConfig,
  isEdit,
  onRemove,
}) => {
  const [filterInput, setFilterInput] = useState('');

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
    <div>
      <ResponsiveFormRow>
        <ResponsiveFormGroup>
          <FormLabel htmlFor={`column-name-${config.columnName}`}>
            Column Name
          </FormLabel>
          <FormInput
            id={`column-name-${config.columnName}`}
            type='text'
            value={config?.label || ''}
            onChange={(e) => updateConfig({ label: e.target.value })}
            placeholder="Enter column name"
          />
        </ResponsiveFormGroup>

        <ResponsiveFormGroup>
          <FormLabel htmlFor={`column-type-${config.columnName}`}>
            Column Type
          </FormLabel>
          <FormSelect
            id={`column-type-${config.columnName}`}
            value={config?.columnType || ''}
            onChange={(e) =>
              updateConfig({ columnType: e.target.value as ColumnConfig['columnType'] })
            }
            disabled={isEdit}
          >
            <option value="">Select type</option>
            {(columnTypes || []).map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </FormSelect>
        </ResponsiveFormGroup>

        <ResponsiveFormGroupToggle>
          <ToggleSwitch
            id={`is-filterable-${config.columnName}`}
            checked={config?.filterable || false}
            onChange={(checked) => {
              if (!checked) {
                updateConfig({ filterable: checked, filterValues: [] })
              } else {
                updateConfig({ filterable: checked })
              }
            }}
            label="Filterable"
          />
        </ResponsiveFormGroupToggle>

        <ResponsiveFormGroupToggle>
          <ToggleSwitch
            id={`is-hidden-${config.columnName}`}
            checked={config?.hidden || false}
            onChange={(checked) => updateConfig({ hidden: checked })}
            label="Hidden"
          />
        </ResponsiveFormGroupToggle>

        <ResponsiveFormGroupToggle>
          <ToggleSwitch
            id={`is-searchable-${config.columnName}`}
            checked={config?.searchable || false}
            onChange={(checked) => updateConfig({ searchable: checked })}
            label="Searchable"
          />
        </ResponsiveFormGroupToggle>

        {onRemove && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RemoveButton onClick={onRemove}>
              <X size={16} />
            </RemoveButton>
          </div>
        )}
      </ResponsiveFormRow>

      {/* Filter Values Section - appears when filterable is enabled */}
      {(config?.filterable || false) && (
        <FilterSection>
          <FilterInputGroup>
            <FormLabel htmlFor={`filter-input-${config.columnName}`}>
              Filter Values
            </FormLabel>
            <FormInput
              id={`filter-input-${config.columnName}`}
              type='text'
              value={filterInput}
              onChange={(e) => setFilterInput(e.target.value)}
              onKeyDown={handleFilterKeyPress}
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
                    <X size={12} />
                  </TagRemove>
                </ResponsiveFilterTag>
              ))}
            </ResponsiveFilterTags>
          )}
        </FilterSection>
      )}
    </div>
  );
};
