import React, { useEffect, useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { People } from '@/data/people';
import { type People as PeopleInterface } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, addPeople, store } from '@/redux';
import { AppStore } from '@/redux/store';
import { PeopleTable } from '..';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addPeople(People))
	}, [])

	return (
		<>
			<PeopleTable/>
		</>
	);
};

export default Home;
