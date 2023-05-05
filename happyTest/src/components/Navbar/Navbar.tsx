import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '..';
import { FavoriteTable } from './FavoriteTable';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {

  const statePeople = useSelector((store: AppStore) => store.people)


  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }

	return (
    <>
       <CustomDialog>
          <FavoriteTable/>
       </CustomDialog>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Happy Test
            </Typography>
            <IconButton color='secondary' aria-label='favorites' component='label' onClick={ handleClick }>
              <FavoriteIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
    </>
	)
	
}

export default Navbar;
