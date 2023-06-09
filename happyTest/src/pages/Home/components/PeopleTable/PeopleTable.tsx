import { People } from '@/models';
import { addFavorite } from '@/redux';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {

	const [selectedPeople, setSelectedPeople] = useState<People[]>([])

	const dispatch = useDispatch()

	const pageSize = 5

	const statePeople = useSelector((store: AppStore) => store.people)
	const favoritePeople = useSelector((store: AppStore) => store.favorites)


	const findPeople = (people: People) => !!favoritePeople.find(p => p.id === people.id)
	const filterPeople = (people: People) => favoritePeople.filter(p => p.id !== people.id)


	const handleChange = (people: People) => {
		const filteredPeople =  findPeople(people) ? filterPeople(people) : [...selectedPeople, people]
		dispatch(addFavorite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sorteable: false,
			headerName: '',
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>
				<Checkbox
					size='small'
					checked={findPeople(params.row)}
					onChange={ () => handleChange(params.row) }
				/>
			</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level of happiness',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		}
	]

	useEffect(() => {
		setSelectedPeople(favoritePeople)
	}, [favoritePeople])

	return (
		<DataGrid 
				rows={statePeople}
				columns={columns}
				disableColumnSelector
				disableRowSelectionOnClick
				autoHeight
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: pageSize
						}
					}
				}}
				getRowId={(row: any) => row.id}
			/>
	);
};

export default PeopleTable;
