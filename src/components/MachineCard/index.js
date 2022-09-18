import { DeleteOutlined } from '@mui/icons-material';
import { Checkbox, Grid, IconButton, TextField, FormControlLabel } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import CustomPaper from '../CustomPaper';

const MachineCard = ({ machine, handleRemoveMachine, handleUpdateMachine, fields, index }) => {
  const handleUpdate = (name, value) => {
    handleUpdateMachine(index, { [name]: value });
  };

  const generateFields = () =>
    fields?.map((field) => {
      let element = null;
      switch (field.type) {
        case 'textbox':
          element = (
            <TextField
              name={field.name}
              value={machine[field.name]}
              label={field.name}
              fullWidth
              onChange={(e) => handleUpdate(e.target.name, e.target.value)}
            />
          );
          break;
        case 'checkbox':
          element = (
            <FormControlLabel
              control={<Checkbox name={field.name} checked={machine[field.name] === true} />}
              label={field.name}
              onChange={(e) => handleUpdate(e.target.name, e.target.checked)}
            />
          );
          break;
        case 'number':
          element = (
            <TextField
              name={field.name}
              value={machine[field.name]}
              type="number"
              label={field.name}
              fullWidth
              onChange={handleUpdate}
            />
          );
          break;
        case 'date':
          element = (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name={field.name}
                value={machine[field.name]}
                label={field.name}
                // eslint-disable-next-line react/jsx-props-no-spreading
                renderInput={(params) => <TextField {...params} />}
                onChange={(value) => {
                  handleUpdate(field.name, value);
                }}
              />
            </LocalizationProvider>
          );
          break;
        default:
          break;
      }
      return (
        <Grid item key={field.name} xs={12}>
          {element}
        </Grid>
      );
    });

  return (
    <CustomPaper>
      <Grid container alignItems="center">
        <Grid item>{machine?.name || 'Untitled'}</Grid>
        <Grid item>
          <IconButton color="error" onClick={() => handleRemoveMachine(index)}>
            <DeleteOutlined />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {generateFields()}
      </Grid>
    </CustomPaper>
  );
};

export default MachineCard;
