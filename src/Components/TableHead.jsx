import React from 'react';

const TableHead = ({ tableHead }) => {
    return (
        <thead>
            <tr>
                {
                    tableHead.map((head, index) => (
                        <th className={head === 'Total des Points' ? 'text-right' : 'text-left'} key={index}>{head}</th>
                    ))
                }
            </tr>
        </thead>
    );
};

export default TableHead;