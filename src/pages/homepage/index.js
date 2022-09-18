import { AddCircleOutline } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';

const Homepage = () => {
  const handleNewMachine = () => {
    console.log('new machine');
  };

  return (
    <>
      <Grid container alignContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <h1>hello world from homepage</h1>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleNewMachine} startIcon={<AddCircleOutline />}>
            <Typography>Add New Machine</Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid container>Hello</Grid>
    </>
  );
};

export default Homepage;
