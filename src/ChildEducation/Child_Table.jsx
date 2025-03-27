import React from 'react'

function Child_Table() {

const tableData=[{
  code:"TEC001",
  course:"	Certificate Program in Classroom Management"
},{
  code:"TEC002",
  course:"Certificate Program in Early Childhood care Education"
},{
  code:"TEC003",
  course:"Certificate Program in Teaching Methods & Aids"
},{
  code:"TEC004",
  course:"Certificate Program in Teaching Learning Technology"
},{
  code:"TEC005",
  course:"Certificate program in Montessori Activity"
},{
  code:"	TEC006",
  course:"Certificate program in Inclusive Education"
},{
  code:"TEC007",
  course:"Certificate Program in Child Psychology and Child Development"
},{
  code:"TEC008",
  course:"Certificate in Preofessional Phonics"
},{
  code:"TED009",
  course:"Diploma in Primary Education"
},{
  code:"TED010",
  course:"Diploma in Nursery Education"
},{
  code:"TED011",
  course:"Diploma in Montessori and Child Education"
},{
  code:"TED012",
  course:"Diploma in Creche and Pre School Management"
},{
  code:"TED013",
  course:"Diploma in Anganwadi Worker"
},{
  code:"TED014",
  course:"Diploma in Anganwadi Supervisor"
},{
  code:"TED015",
  course:"Diploma in Early Childhood Care Education"
},{
  code:"TED016",
  course:"Diploma in Guidance and Counseling"
},{
  code:"TED017",
  course:"Diploma in Nutrition and Dietetics"
},{
  code:"TED018",
  course:"Diploma in School Counselling"
},{
  code:"TED019",
  course:"Diploma in Early Intervention"
},{
  code:"TEAD020",
  course:"Advanced Diploma in Montessori and Early Child Care Education"
},{
  code:"TEAD021",
  course:"Advanced Diploma in Montessori Education"
},{
  code:"TEAD022",
  course:"Advanced Diploma in Nursery Education"
},{
  code:"TEAD023",
  course:"Advanced Diploma in Montessori & Primary Education"
}
]

  return (
    <div className='flex flex-col items-center w-[100%] mt-12 mb-12'>
      <table className='border border-collapse border-gray-300 w-[90%]'>
        <thead>
        <tr >
        <th className='bg-[#192C57] text-white text-xs md:text-normal lg:text-xl border border-gray-300 px-4 py-2'>S:NO</th>
        <th className='bg-[#192C57] text-white text-xs md:text-normal lg:text-xl border border-gray-300 px-4 py-2'>Course Code</th>
        <th className='bg-[#192C57] text-white text-xs md:text-normal lg:text-xl border border-gray-300 px-4 py-2'>Courses</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData.map(function(item,index){
            return (<>
            <tr className={`transition-height transition-bg duration-300 ease-in-out active:h-[70px] active:text-white active:bg-[#D94426] hover:h-[70px] hover:text-white hover:bg-[#D94426]  ${index % 2 == 0 ? "bg-white":"bg-[#CCCCCC]"} `} key={index}>
              <td className='border border-gray-300 text-xs md:text-normal md:py-2 md:px-3.5 px-2 py-1 lg:text-xl lg:px-6 lg:py-3 '>{index+1}</td>
              <td className='border border-gray-300 text-xs md:text-normal md:py-2 md:px-3.5 px-2 py-1 lg:text-xl lg:px-6 lg:py-3'>{item.code}</td>
              <td className='border border-gray-300 text-xs md:text-normal  md:py-2 md:px-3.5 px-2 py-1  lg:text-xl lg:px-6 lg:py-3'>{item.course}</td>
            </tr>
            </>)
          })
        }
        </tbody>
        
       
      </table>
    </div>
  )
}

export default Child_Table