import React from 'react';

const TableHead = ({ tableHead }) => {
    return (
        <thead>
            <tr>
                {
                    tableHead.map((head, index) => (
                        <th className={`${head === 'Total des Points' ? 'text-right' : 'text-left'} font-semibold 2xl:text-lg xl:text-sm text-[8px] text-white`} key={index}>{head}</th>
                    ))
                }
            </tr>
        </thead>
    );
};

export default TableHead;