export interface ColumnConfig {
  label: string;
  columnName: string;
  columnType: string;
  filterable: boolean;
  hidden: boolean;
  searchable: boolean;
  filterValues: string[];
}

export interface LabelValue {
  label: string;
  value: string;
}
