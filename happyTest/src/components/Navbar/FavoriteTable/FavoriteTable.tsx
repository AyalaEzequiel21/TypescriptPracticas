import { addFavorite, removeFavorite } from '@/redux';
import { AppStore } from '@/redux/store';
import { IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete'


export interface FavoriteTableInterface {
}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<PeopleInterface[]>([])

	const dispatch = useDispatch()

	const pageSize = 5

	const stateFavorite = useSelector((store: AppStore) => store.favorites)

	const findPeople = (people: PeopleInterface) => !!selectedPeople.find(p => p.id === people.id)
	const filterPeople = (people: PeopleInterface) => selectedPeople.filter(p => p.id !== people.id)


	const handlelick = (people: PeopleInterface) => {
		const filteredPeople =  findPeople(people) ? filterPeople(people) : [...selectedPeople, people]
		dispatch(removeFavorite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50, 
			renderCell: (params : GridRenderCellParams) => (
				<>
					{
						<IconButton color='secondary' aria-label='favorites' component='label' onClick={ ()=> handleClick(params.row) }>
							<DeleteIcon/>
						</IconButton>
					}
				</>
			)
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
		<DataGrid 
				rows={stateFavorite}
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


export default FavoriteTable;
