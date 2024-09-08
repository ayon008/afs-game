import TableHead from '@/Components/TableHead';
import TableRow from '@/Components/TableRow';
import React from 'react';

const LeadBoard = ({ allData, userPosition, userData }) => {
    return (
        <div className="overflow-x-auto w-full 2xl:mt-10 xl:mt-6">
            <table className="table">
                <TableHead />
                <tbody>
                    {
                        allData?.map((d, i) => {
                            return (
                                <TableRow key={i} data={d} position={i + 1} />
                            );
                        })
                    }
                    {
                        userPosition > 3 &&
                        <TableRow key={userData.uid} data={userData} position={userPosition} />
                    }
                </tbody>
            </table>
        </div>
    );
};

export default LeadBoard;