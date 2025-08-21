import React from 'react';
import {
  ResponsiveFormRow,
  ResponsiveFormGroup,
  ResponsiveFormGroupToggle,
  FormLabel,
  FormInput,
  FormSelect
} from './style';
import { Toggle } from './toggle';
import { ColumnConfig } from './types';

interface ColumnConfigRowProps {
  config: ColumnConfig;
  columnTypes: { label: string; value: string }[];
  updateConfig: (updates: Partial<ColumnConfig>) => void;
  isEdit: boolean;
  columnId: string;
}

export const ColumnConfigRow: React.FC<ColumnConfigRowProps> = ({
  config,
  columnTypes,
  updateConfig,
  isEdit,
}) => {
  return (
    <ResponsiveFormRow>
      <ResponsiveFormGroup>
        <FormLabel htmlFor='column-name'>Column Name</FormLabel>
        <FormInput
          id='column-name'
          type='text'
          value={(config?.label || '')}
          onChange={(e) => updateConfig({ label: e.target.value })}
          placeholder="Enter column name"
        />
      </ResponsiveFormGroup>

      <ResponsiveFormGroup>
        <FormLabel htmlFor='column-type'>Column Type</FormLabel>
        <FormSelect
          id='column-type'
          value={(config?.columnType || '')}
          onChange={(e) =>
            updateConfig({ columnType: e.target.value as ColumnConfig['columnType'] })
          }
          disabled={isEdit}
        >
          {(columnTypes || []).map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </FormSelect>
      </ResponsiveFormGroup>

      <ResponsiveFormGroupToggle>
        <Toggle
          id='is-filterable'
          checked={(config?.filterable || false)}
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
        <Toggle
          id='is-hidden'
          checked={(config?.hidden || false)}
          onChange={(checked) => updateConfig({ hidden: checked })}
          label="Hidden"
        />
      </ResponsiveFormGroupToggle>

      <ResponsiveFormGroupToggle>
        <Toggle
          id='is-searchable'
          checked={(config?.searchable || false)}
          onChange={(checked) => updateConfig({ searchable: checked })}
          label="Searchable"
        />
      </ResponsiveFormGroupToggle>
    </ResponsiveFormRow>
  );
};
