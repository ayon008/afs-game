import React from 'react';

const TableHead = () => {
    const tableHead = ['#', 'Participant', 'Wingfoil', 'Windfoil', 'Dockstart', 'Surffoil', 'DW', 'Total des points']
    return (
        <thead>
            <tr>
                {
                    tableHead.map((head, index) => (
                        <th className={head === 'Total des points' ? 'text-right' : 'text-left'} key={index}>{head}</th>
                    ))
                }
            </tr>
        </thead>
    );
};

export default TableHead;