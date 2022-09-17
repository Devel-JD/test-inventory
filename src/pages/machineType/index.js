import { useCallback } from 'react';
import { AddCircleOutline } from '@mui/icons-material';
import { Grid, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import MachineTypeCard from 'src/components/MachineTypeCard';
import * as machineTypeActions from 'src/features/machine-type/machineTypeSlice';

const MachineType = () => {
  const machineTypes = useSelector((state) => state.machineTypes);
  const dispatch = useDispatch();

  const handleNewMachineType = () => {
    // console.log('add new machine type');
    dispatch(machineTypeActions.add());
  };

  const handleRemoveMachineType = useCallback((index) => {
    // console.log('remove machine type');
    dispatch(machineTypeActions.remove(index));
  }, []);

  const handleEditMachineType = useCallback((data) => {
    // console.log('edit machine type information');
    dispatch(machineTypeActions.update(data));
  }, []);

  const generateListOfMachineType = () =>
    machineTypes.map((machineType, index) => (
      <Grid item key={machineType.id} xs={12} sm={6} md={4}>
        <MachineTypeCard
          idx={index}
          machineType={machineType}
          handleEditMachineType={handleEditMachineType}
          handleRemoveMachineType={handleRemoveMachineType}
        />
      </Grid>
    ));

  return (
    <>
      <Grid container alignContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <h1>Machine Type Page</h1>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleNewMachineType}
            startIcon={<AddCircleOutline />}>
            <Typography>Add New Machine Type</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {generateListOfMachineType()}
      </Grid>
    </>
  );
};

export default MachineType;
