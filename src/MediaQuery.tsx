import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Typography} from'@mui/material';

const useStyles = makeStyles((theme:any) => ({
  root: {
    height: '100vh',
    backgroundColor: 'blue',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'red',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'orange',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: 'cyan',
    },
  },
}));

const MediaQuery = () => {
  const classes = useStyles();
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up('sm'));
  

  return (
    <div className={classes.root}>
      <Typography>
       there are different types present
      </Typography>
      {showText && <Typography variant="h1">Appear when </Typography>}
    </div>
  );
};

export default MediaQuery;