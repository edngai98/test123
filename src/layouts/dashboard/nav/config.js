// component
import { AssignmentSharp, Diversity3Sharp, HomeSharp, ScoreboardSharp, SportsSharp } from '@mui/icons-material';
import SvgColor from '../../../components/svg-color';




// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: <HomeSharp/>,
  },
  {
    title: 'Registration',
    path: '/dashboard/blog',
    icon: <AssignmentSharp />,
  },
  {
    title: 'Teams',
    path: '/dashboard/user',
    icon: <Diversity3Sharp />,
    
  },
  {
    title: 'Matches',
    path: '/dashboard/products',
    icon: <SportsSharp />,

    
  },
  {
    title: 'Results',
    path: '/dashboard/blog',
    icon: <ScoreboardSharp />,
    
  },
  
 
];

export default navConfig;
