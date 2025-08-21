import React from 'react';
import {
  ResponsiveFormRow,
  ResponsiveFormGroup,
  ResponsiveFormGroupToggle,
  FormLabel,
  FormInput,
  FormSelect,
  ToggleSwitch,
  RemoveButton,
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
  return (
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
  );
};
