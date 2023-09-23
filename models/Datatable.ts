import React from "react";
import { unknown, z } from "zod";

const DatatableLinkSchema = z.object({
    url: z.string().optional(),
    label: z.string().optional(),
    active: z.boolean(),
});

// const DtSchema = z.object({
//     title: z.string().optional(),
//     current_page: z.number().nullable(),
//     first_page_url: z.string().nullable().optional(),
//     from: z.number().nullable(),
//     last_page: z.number().nullable(),
//     last_page_url: z.string().nullable().optional(),
//     next_page_url: z.string().nullable().optional(),
//     path: z.string().nullable().optional(),
//     per_page: z.number().nullable(),
//     prev_page_url: z.string().nullable().optional(),
//     to: z.number().nullable(),
//     total: z.number().nullable(),
// })


// export const DatatableSchema = DtSchema.extend({
//     links : z.array(DatatableLinkSchema)
// })



const DatatableColumnSchema = z.object({
    selector: z.function().optional(),
    format: z.function().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    sortable: z.boolean().optional(),
    show: z.boolean().optional(),
    button: z.boolean().optional(),
    cell: z.function().optional(),
    ignoreRowClick: z.boolean().optional(),
    allowOverflow: z.boolean().optional(),
    grow: z.number().optional(),
    right: z.boolean().optional(),
})

export type DatatableColumn = z.infer<typeof DatatableColumnSchema>


const DatatableSelectedSchema = z.object({
    allSelected: z.boolean(),
    selectedCount: z.number(),
    selectedRows: z.any().array(),
})

export type DatatableSelected = z.infer<typeof DatatableSelectedSchema>

const DtSchema = z.object({
    title: z.string().optional(),
    recordsTotal: z.number(),
    recordsFiltered: z.number(),
})

export const DatatableSchema = DtSchema.extend({
    data : z.any().array(),
    columns: z.array(DatatableColumnSchema),
    selectableRows: z.any().optional(),
    onSelectedRowsChange : z.void(),
    expandableRows: z.boolean().optional(),
    expandableRowsComponent : z.void(),
    mutate: z.void(),
    children: z.any().optional()
})

export type Datatable = z.infer<typeof DatatableSchema>








