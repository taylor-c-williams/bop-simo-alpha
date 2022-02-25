import styles from '../../App.css';
import UserMenu from './UserMenu';
import HamburgerMenu from './HamburgerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Avatar,
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Box,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
  Menu,
} from '@mui/material';

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ justifyContent: 'center', paddingBottom: 6 }}
      className={styles.appBar}
    >
      <FormGroup sx={{ display: 'block' }}>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          bgcolor: 'appBar',
          border: 2,
          borderRadius: 1,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'center',
          }}
        >
          <HamburgerMenu />
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          {auth && <UserMenu />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
