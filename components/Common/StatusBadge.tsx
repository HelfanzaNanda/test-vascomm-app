import React from 'react'

export default function StatusBadge({status} : {status : string}) {
    if (status == 'NOT ACTIVE') {
        return (
            <span  className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Not Active</span>
        )
    }else{
        return (
            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Active</span>
        )
    }
}
