import { DeleteOutlined } from '@mui/icons-material';
import {
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  InputBase,
  Box,
  Divider,
} from '@mui/material';
import CustomPaper from 'src/components/CustomPaper';

const MachineTypeCard = ({ machineType, idx, handleEditMachineType, handleRemoveMachineType }) => {
  const handleUpdate = (e) => {
    // console.log(e.target.name);
    handleEditMachineType({ index: idx, data: { [e.target.name]: e.target.value } });
  };

  const handleAddFields = () => {
    handleEditMachineType({
      index: idx,
      data: { fields: [...machineType.fields, { id: Date.now(), name: '', type: 'textbox' }] },
    });
  };

  const handleRemoveField = (fieldIdx) => {
    const updatedFields = [...machineType.fields];
    updatedFields.splice(fieldIdx, 1);
    handleEditMachineType({
      index: idx,
      data: { fields: updatedFields },
    });
  };

  const handleFieldUpdate = (e, fieldIdx) => {
    const updatedFields = [...machineType.fields];
    updatedFields[fieldIdx] = { ...updatedFields[fieldIdx], [e.target.name]: e.target.value };

    handleEditMachineType({
      index: idx,
      data: { fields: updatedFields },
    });
  };

  const generateFields = () =>
    machineType.fields.map((field, fieldIdx) => (
      <Grid item key={field.id}>
        <Grid container alignItems="center">
          <Grid item xs={11}>
            <Box sx={{ border: '1px solid #bbb', borderRadius: 1 }}>
              <Grid container>
                <Grid item xs={7}>
                  <InputBase
                    placeholder="Field Name"
                    sx={{ flex: 1, padding: '10px 15px' }}
                    value={field.name}
                    name="name"
                    onChange={(e) => handleFieldUpdate(e, fieldIdx)}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Select
                    value={field.type}
                    name="type"
                    fullWidth
                    onChange={(e) => handleFieldUpdate(e, fieldIdx)}>
                    <MenuItem value="textbox">Textbox</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                    <MenuItem value="checkbox">Checkbox</MenuItem>
                    <MenuItem value="number">Number</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <IconButton color="error" onClick={() => handleRemoveField(fieldIdx)}>
              <DeleteOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    ));

  return (
    <CustomPaper>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h4">{machineType?.name || `Untitled`}</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => handleRemoveMachineType(idx)} color="error">
                <DeleteOutlined />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField
                name="name"
                variant="outlined"
                value={machineType?.name}
                label="Machine Category Name"
                fullWidth
                onChange={handleUpdate}
              />
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel>Pick a Field as Title</InputLabel>
                <Select
                  label="Pick a Field as Title"
                  value={machineType?.fieldForTitle || ''}
                  name="fieldForTitle"
                  onChange={handleUpdate}>
                  {machineType.fields.reduce((filtered, field) => {
                    /// we want to ensure that we generate the option only for fields with name
                    if (field.name !== '')
                      filtered.push(
                        <MenuItem value={field.name} key={field.id}>
                          {field.name}
                        </MenuItem>,
                      );
                    return filtered;
                  }, [])}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            {generateFields()}
            <Grid item>
              <Divider />
              <Button onClick={handleAddFields}>Add More Field</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default MachineTypeCard;
