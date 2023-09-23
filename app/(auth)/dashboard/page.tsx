"use client";
import Datatables from '@/components/Datatables';
import { useCardDashboard } from '@/features/dashboard/useCardDashboard';
import { useLatestProducts } from '@/features/products/useLatestProducts';
import { dateFormatDDMMMYYYY } from '@/lib/date';
import { rupiahFormat } from '@/lib/helpers';
import { DashboardTableResults } from '@/models/Dashboard';
import { DatatableColumn } from '@/models/Datatable';
import { ProductDatatableResult } from '@/models/Product';
import { GlobalResponse } from '@/types/response';
import React from 'react'

export default function Dashboard() {

    const [cards, setCards] = React.useState<DashboardTableResults>([]);

    const { mutate : mutateCard, isLoading : isLoadingCard } = useCardDashboard({
        onSuccess : (res : GlobalResponse<DashboardTableResults>) => {

            if (res.code == 200) {
                setCards(res.data);
            }   
        }
    });

    const [data, setData] = React.useState<DashboardTableResults>([]);

    const columns : DatatableColumn[]= [
        // { id : 'image', selector: (row : any) => row.image, name: "Image", },
        { id : 'image', selector: (row : any) => row.file.fileurl, name: "Image", format : (row : any) => <img src={row.file.fileurl} className="w-20 h-20 p-2 rounded-md"/> },
        { id : 'name', selector: (row : any) => row.name, name: "Name", },
        { id : 'created_at', selector: (row : any) => row.created_at,  format : (row : any) => dateFormatDDMMMYYYY(row.created_at), name: "created_at", },
        { id : 'price', selector: (row : any) => row.price, format: (row : any) => rupiahFormat(row.price), name: "Price", },
        // { id : 'status', selector: (row : any) => row.status, format: (row : any) => <StatusBadge status={row.status} />,  name: "Status", },
        // { name: "Action", cell: (row) => <DataTableAction onClickDelete={() => handleConfirmationDelete(row.id)} onClickEdit={() => handleEdit(row.id)} onClickDetail={() => handleDetail(row.id)}/>, ignoreRowClick: true, allowOverflow: true, button: true, },
    ];

    const { mutate : datatableMutate } = useLatestProducts({
        onSuccess : (res : GlobalResponse<DashboardTableResults>) => {
            if (res.code == 200) {
                setData(res.data)
            }
        }
    });

    React.useEffect(() => {
        datatableMutate({});
    }, [])



    React.useEffect(() => {
        mutateCard({});
    }, []);

    return (
        <>
            <h2 className='capitalize mb-3 font-semibold'>Dashboard</h2>
            <section className='grid grid-cols-4 mx-auto'>

                {
                    cards.map((card, key) => (
                        <div key={key} className="block bg-blue-500 mb-2 max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                            <p className="font-normal text-white dark:text-gray-400">{card.desc}</p>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{card.total}</h5>
                        </div>
                    ))
                }
            </section>

            <section className='mt-4'>
                <h2 className='capitalize mb-3 font-semibold'>product terbaru</h2>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                columns.map((col, key) => (
                                    <th key={key} scope="col" className="px-6 py-3">{col.name}</th>        
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((item, key) => (
                                <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th>
                                        <img src={item.file.fileurl} className="w-20 h-20 p-2 rounded-md"/>
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">{dateFormatDDMMMYYYY(item.created_at)}</td>
                                    <td className="px-6 py-4">{rupiahFormat(item.price)}</td>
                                </tr>

                            ))
                        }
                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                            Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Laptop PC</td>
                            <td className="px-6 py-4">$1999</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                            Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>
                        </tr> */}
                        </tbody>
                    </table>
                    </div>

            </section>

        </>
    )
}
