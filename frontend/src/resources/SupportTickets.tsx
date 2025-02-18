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
const SupportTicketsTitle = () => {
  const record = useRecordContext();
  return <span>SupportTickets {record ? `"${record.id}"` : ''}</span>;
};

export const SupportTicketsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="description" />
      <ReferenceField source="relatedTicket" reference="Supporttickets" />
      <ReferenceField source="relatedUser" reference="Users" />
      <ReferenceField source="relatedCustomer" reference="Customers" />
      <TextField source="status" />
      <DateField source="creationDate" />
      <DateField source="resolutionDate" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const SupportTicketsEdit = () => (
  <Edit title={<SupportTicketsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedTicket" reference="Supporttickets" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedUser" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedCustomer" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="status" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="creationDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="resolutionDate" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const SupportTicketsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedTicket" reference="Supporttickets" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedUser" reference="Users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="relatedCustomer" reference="Customers" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="status" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="creationDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="resolutionDate" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="relatedTicket"
    label="relatedTicket"
    reference="Supporttickets"
    alwaysOn
  />,
  <ReferenceInput
    source="relatedUser"
    label="relatedUser"
    reference="Users"
    alwaysOn
  />,
  <ReferenceInput
    source="relatedCustomer"
    label="relatedCustomer"
    reference="Customers"
    alwaysOn
  />,
  ,
  ,
  ,
];
