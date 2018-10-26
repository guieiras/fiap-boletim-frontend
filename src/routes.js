import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';

export default [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
