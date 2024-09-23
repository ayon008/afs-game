import React from 'react';

const TableHead = ({ tableHead, profile }) => {
    return (
        <thead>
            <tr>
                {
                    tableHead.map((head, index) => (
                        <th className={`${head === 'Temps total' ? 'text-right' : 'text-left'} ${profile ? 'text-white' : 'text-black'} font-semibold 2xl:text-lg xl:text-sm text-[8px] border-b-[1px] border-[#00000033]`} key={index}>{head}</th>
                    ))
                }
            </tr>
        </thead>
    );
};

export default TableHead;