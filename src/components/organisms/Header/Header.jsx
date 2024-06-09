import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const theme = useTheme();

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className='headerBg'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Inter',
              fontStyle: 'italic',
              color: theme.palette.mainWhite,
              textDecoration: 'none',
            }}
          >
            &lt; DVL &#47; &gt;
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '.MuiMenu-list': {
                  backgroundColor: theme.palette.secondaryBlack,
                  padding: 0
                },
                '.MuiMenu-paper': {
                  backgroundColor: theme.palette.secondaryBlack
                }
              }}
            >

              <MenuItem onClick={handleCloseNavMenu} sx={{ ':active': { backgroundColor: theme.palette.mainBlack } }}>
                <Typography textAlign="center" sx={{ width: '100%', color: theme.palette.mainWhite }}>Sobre mí</Typography>
              </MenuItem>

              <Divider sx={{ margin: '0 !important' }} />

              <MenuItem onClick={handleCloseNavMenu} sx={{ ':active': { backgroundColor: theme.palette.mainBlack } }}>
                <Typography textAlign="center" sx={{ width: '100%', color: theme.palette.mainWhite }}>Proyectos</Typography>
              </MenuItem>

              <Divider sx={{ margin: '0 !important' }} />

              <MenuItem onClick={handleCloseNavMenu} sx={{ ':active': { backgroundColor: theme.palette.mainBlack } }}>
                <Typography textAlign="center" sx={{ width: '100%', color: theme.palette.mainWhite }}>Contacto</Typography>
              </MenuItem>

              <Divider sx={{ margin: '0 !important' }} />

              <MenuItem onClick={handleCloseNavMenu} sx={{ ':active': { backgroundColor: theme.palette.mainBlack } }}>
                <Typography textAlign="center" sx={{ width: '100%', color: theme.palette.lightPurple }}>Descargar CV</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Inter',
              fontStyle: 'italic',
              color: theme.palette.mainWhite,
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            &lt; DVL &#47; &gt;
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '15px' }}>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: theme.palette.mainWhite, display: 'block', ':active': { backgroundColor: theme.palette.mainBlack } }}
            >
              Sobre mí
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: theme.palette.mainWhite, display: 'block', ':active': { backgroundColor: theme.palette.mainBlack } }}
            >
              Proyectos
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: theme.palette.mainWhite, display: 'block', ':active': { backgroundColor: theme.palette.mainBlack } }}
            >
              Contacto
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: theme.palette.mainWhite, display: 'block', border: `1px solid ${theme.palette.lightPurple}`, ':active': { backgroundColor: theme.palette.mainBlack } }}
            >
              Descargar CV
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Ajustes">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, marginLeft: '1em' }}>
                <SettingsIcon sx={{ color: theme.palette.mainWhite }} />
              </IconButton>
            </Tooltip>
            {/* <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                
                    <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"></Typography>
                    </MenuItem>
                </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
