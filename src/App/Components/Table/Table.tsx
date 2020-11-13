import React, { useState, useEffect } from 'react';
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import './Table.scss';

const Table = () => {
    const [tableData, setTableData] = useState();

    const getTableData = () => {
        const url = 'https://team.carddex.ru/api/rr/employees';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTableData(data.list);
            })
            .catch((e) => console.log('Error', e));
    };

    useEffect(() => {
        getTableData();
    }, [tableData]);

    return (
        <BaseTable data={tableData} width={600} height={400}>
            <Column key="name" dataKey="name" width={100} />
            <Column key="uuid" dataKey="uuid" width={100} />
        </BaseTable>
    );
};

export default Table;
