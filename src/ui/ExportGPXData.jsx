import React from 'react';
import * as XLSX from 'xlsx';

const ExportGPXData = ({ data }) => {
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

        // Create a custom filename with a timestamp
        const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
        const filename = `user_data_${timestamp}.xlsx`;

        // Download file
        XLSX.writeFile(workbook, filename);
    };
    return (
        <div>
            <button onClick={exportToExcel} className="download-table-xls-button text-white bg-green-600 btn">
                Export Data to Excel Sheet
            </button>
        </div>
    )
};

export default ExportGPXData;