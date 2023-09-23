import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import React, { useEffect } from 'react';
// import { Select, SelectItem, SelectedItems, Selection } from '@nextui-org/react';
import { Datatable, DatatableColumn, DatatableSelected } from '@/models/Datatable';
import { unknown } from 'zod';
import { ProductDatatableRequest } from '@/models/Product';

const Datatables: React.FC<Datatable> = (props) => {
    const { title, columns : initialColumns, data, recordsTotal, recordsFiltered, selectableRows, expandableRows, mutate, children } = props;

    const [perPage, setPerPage] = React.useState(10); //length
    const [page, setPage] = React.useState(0); //start
    const [search, setSearch] = React.useState(""); //search
    const [order, setOrder] = React.useState({}); //order

    
    const cols = initialColumns?.map(c => ({ ...c, sortable : true }));
    const [columns, setColumns] = React.useState<DatatableColumn[]>(cols); 
    

    const onSelectedRowsChange = (data : DatatableSelected) => {
        if (props.selectableRows) {
            props.onSelectedRowsChange(data);
        }
    }

    const handlePerRowsChange = (newPerPage : number, page : number) => {
        setPerPage(newPerPage);

        mutate({ 
            start : (page * newPerPage) - (newPerPage - 1),
            length: newPerPage,
            search: search,
            order : order
         });
    }

    const handlePageChange = (page : number) => {
        setPage(page)
        mutate({
            start : (page * perPage) - (perPage - 1),
            length: perPage,
            search: search,
            order : order
        });
    }

    const handleSearch = (str : string) => {
        setPerPage(10);
        setSearch(str);
        mutate({ search : str })
    }

    const handleSort = (column : any, sortDirection : string) => {
        if (!column) {
            column = "created_at";
        }
        setOrder({
            col: column,
            dir: sortDirection
        })
		console.log('col : ', column);
		console.log('sortDirection : ', sortDirection);

        mutate({
            start : (page * perPage) - (perPage - 1),
            length: perPage,
            search: search,
            order : order
        });
	};
    

    const handleSelectedColumns = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cols : string[] = e.target.value.split(",");

        const selectedColumns = initialColumns.filter(({ id: id1 }) => cols.some(id2 => id2 === id1));
        setColumns(selectedColumns);
    }
    
	const subHeaderDatatableMemo = React.useMemo(() => {


		return (

            <div className='flex space-x-2 items-center justify-center'>
                {/* <input
                    type="text"
                    placeholder="type to search"
                    className="px-3 block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
                    onInput={(e : React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
                /> */}

                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search" required
                    onInput={(e : React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)} />


                {children}
            </div>
		);
	}, []);

    const ExpandedComponent: React.FC<ExpanderComponentProps<any>> = ({ data }) => {
        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    };


    return (
         <>
         
            <DataTable
                title={title}
                columns={columns}
                data={data}
                selectableRows={selectableRows}
                onSelectedRowsChange={onSelectedRowsChange}
                pagination
                paginationServer
                paginationTotalRows={recordsFiltered}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                // sortServer
                // onSort={handleSort}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                subHeader
			    subHeaderComponent={subHeaderDatatableMemo}
                expandableRows={expandableRows}
                expandableRowsComponent={ExpandedComponent}
            />
        </>
    );
};

export default Datatables;
