//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const HealthMetricsTitle = () => {
  const record = useRecordContext();
  return <span>HealthMetrics {record ? `"${record.id}"` : ''}</span>;
};

export const HealthMetricsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="description" />
      <ReferenceField source="relatedCustomer" reference="Customers" />
      <TextField source="type" />
      <NumberField source="value" />
      <TextField source="unit" />
      <DateField source="date" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const HealthMetricsEdit = () => (
  <Edit title={<HealthMetricsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedCustomer" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="type" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="value" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="unit" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="date" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const HealthMetricsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedCustomer" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="type" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="value" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="unit" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="date" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="relatedCustomer"
    label="relatedCustomer"
    reference="Customers"
    alwaysOn
  />,
  ,
  ,
  ,
  ,
];
