import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { People } from '@/data/people';
import { type People as PeopleInterface } from '@/models';
import { Checkbox } from '@mui/material';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {

	const [selectedPeople, setSelectedPeople] = useState<PeopleInterface[]>([])

	const pageSize = 5

	const findPeople = (people: PeopleInterface) => !!selectedPeople.find(p => p.id === people.id)
	const filterPeople = (people: PeopleInterface) => selectedPeople.filter(p => p.id !== people.id)


	const handleChange = (people: PeopleInterface) => {
		setSelectedPeople(findPeople(people) ? filterPeople(people) : [...selectedPeople, people])
	}

	const columns = [
		{
			field: 'actions',
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

	return (
		<>
			<DataGrid 
				rows={People}
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
		</>
	);
};

export default Home;
