// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Profile',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Communication',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Courses/Jobs',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Freelancers/Clients',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  //   {
  //     title: 'login',
  //     path: '/login',
  //     icon: icon('ic_lock'),
  //   },
  {
    title: 'Support',
    path: '/support',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
