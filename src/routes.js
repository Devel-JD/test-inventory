import Homepage from './pages/homepage';
import MachineType from './pages/machineType';

const routes = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/machine-type',
    element: <MachineType />,
  },
];

export default routes;
