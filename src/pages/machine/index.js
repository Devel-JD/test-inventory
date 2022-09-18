import { useParams } from 'react-router-dom';
import { AddCircleOutline } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import * as MachineActions from 'src/features/machine/machineSlice';
import MachineCard from 'src/components/MachineCard';

const Machine = () => {
  const { id } = useParams();
  const machineTypes = useSelector((state) => state.machineTypes);
  const machines = useSelector((state) => state.machines);
  const dispatch = useDispatch();

  const handleNewMachine = () => {
    dispatch(MachineActions.add(machineTypes[id].id));
  };

  const handleRemoveMachine = (machineTypeId, machineIndex) => {
    dispatch(MachineActions.remove({ machineTypeId, index: machineIndex }));
  };

  const handleUpdateMachine = (machineTypeId, machineIndex, data) => {
    dispatch(MachineActions.update({ machineTypeId, index: machineIndex, data }));
  };

  const generateMachineCard = () =>
    machines[machineTypes[id].id]?.map((machine, idx) => (
      <Grid item xs={12} sm={6} md={3} key={machine.id}>
        <MachineCard
          machine={machine}
          fieldForTitle={machineTypes[id].fieldForTitle}
          machineTypeId={machineTypes[id].id}
          fields={machineTypes[id].fields}
          handleRemoveMachine={handleRemoveMachine}
          handleUpdateMachine={handleUpdateMachine}
          index={idx}
        />
      </Grid>
    ));

  return (
    <>
      <Grid container alignContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <h1>{machineTypes[id].name} Page</h1>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleNewMachine} startIcon={<AddCircleOutline />}>
            <Typography>Add New Machine</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {generateMachineCard()}
      </Grid>
    </>
  );
};

export default Machine;
