import BoletimPage from './components/pages/BoletimPage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';

export default [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/boletim',
    component: BoletimPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
