import React from "react";
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
    {
        name: 'Name',
        selector: row => row.title,
    },
    {
        name: 'Unit',
        selector: row => row.year,
    },
    {
        name: 'Price',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        name: 'item1',
        unit: '1',
        price: '$6.90',
    },
    {
        id: 2,
        name: 'item2',
        unit: '1',
        price: '$17.38',
    },
]

function MyComponent() {
    return (
        <DataTable
            columns={columns}
            data={data}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    );
};
export default MyComponent();