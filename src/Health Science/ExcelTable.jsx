import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ExcelTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Load the Excel file from the public folder
      const response = await fetch('/data.xlsx'); // Ensure your file is in the public folder
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });

      // Assuming the data is in the first sheet
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      // Convert the sheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // Log the data to ensure it's correct
      console.log(jsonData); 

      setData(jsonData); // Store the data in state
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center w-[100%] mt-12 mb-12'>
      <table className='border border-collapse border-gray-300 w-[90%]'>
        <thead>
          <tr>
            <th className='bg-[#192C57] text-white text-xs md:text-normal lg:text-xl border border-gray-300 px-4 py-2'>S:NO</th>
            <th className='bg-[#192C57] text-white text-xs md:text-normal lg:text-xl border border-gray-300 px-4 py-2'>Course Code</th>
            <th className='bg-[#192C57] text-white text-xs md:text-normal lg:text-xl border border-gray-300 px-4 py-2'>Courses</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr
                key={index}
                className={`transition-height transition-bg duration-300 ease-in-out active:h-[70px] active:text-white active:bg-[#D94426] hover:h-[70px] hover:text-white hover:bg-[#D94426] ${index % 2 === 0 ? "bg-white" : "bg-[#CCCCCC]"}`}
              >
                <td className='border border-gray-300 text-xs md:text-normal md:py-2 md:px-3.5 px-2 py-1 lg:text-xl lg:px-6 lg:py-3 '>{index + 1}</td>
                {/* Ensure the property names are correct */}
                <td className='border border-gray-300 text-xs md:text-normal md:py-2 md:px-3.5 px-2 py-1 lg:text-xl lg:px-6 lg:py-3'>{item['code']}</td> {/* Adjusted column name */}
                <td className='border border-gray-300 text-xs md:text-normal  md:py-2 md:px-3.5 px-2 py-1 lg:text-xl lg:px-6 lg:py-3'>{item['course']}</td> {/* Adjusted column name */}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ExcelTable;
