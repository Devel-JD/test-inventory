import Homepage from './pages/homepage';
import MachineType from './pages/machineType';
import Machine from './pages/machine';

const routes = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/machine-type',
    element: <MachineType />,
  },
  {
    path: '/machine/:id',
    element: <Machine />,
  },
];

export default routes;
