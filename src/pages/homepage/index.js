import { AddCircleOutline } from '@mui/icons-material';
import { Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MachineCard from 'src/components/MachineCard';
import * as MachineActions from 'src/features/machine/machineSlice';

const Homepage = () => {
  const machineTypes = useSelector((state) => state.machineTypes);
  const machines = useSelector((state) => state.machines);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNewMachine = (machineType) => {
    dispatch(MachineActions.add(machineType.id));
  };

  const handleRemoveMachine = useCallback((machineTypeId, machineIndex) => {
    dispatch(MachineActions.remove({ machineTypeId, index: machineIndex }));
  }, []);

  const handleUpdateMachine = useCallback((machineTypeId, machineIndex, data) => {
    dispatch(MachineActions.update({ machineTypeId, index: machineIndex, data }));
  }, []);

  const generateListOfMachines = () =>
    machineTypes.map((machineType) =>
      machines[machineType.id]?.map((machine, idx) => (
        <Grid item xs={12} sm={6} md={3} key={machine.id}>
          <MachineCard
            machine={machine}
            machineTypeId={machineType.id}
            fieldForTitle={machineType.fieldForTitle}
            fields={machineType.fields}
            handleRemoveMachine={handleRemoveMachine}
            handleUpdateMachine={handleUpdateMachine}
            index={idx}
          />
        </Grid>
      )),
    );

  return (
    <>
      <Grid container alignContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <h1>All Machines</h1>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleMenuClick} startIcon={<AddCircleOutline />}>
            <Typography>Add New Machine</Typography>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            {machineTypes.map((machineType) => (
              <MenuItem key={machineType.id} onClick={() => handleNewMachine(machineType)}>
                {machineType.name}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {generateListOfMachines()}
      </Grid>
    </>
  );
};

export default Homepage;
