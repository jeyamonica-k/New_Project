import React from 'react'

function ArtandDesign_Table() {

  const tableData=[{
    code:"ADC001",
    course:"Certificate in Cushion and Pillow Making (1 month)"
  },{
    code:"ADC002",
    course:"Certificate in Chickan Work(1 month)"
  },{
    code:"ADC003",
    course:"Certificate in Applique Work (1 month)"
  },{
    code:"ADC004",
    course:"Certificate in Quilt Work( 1 month)"
  },{
    code:"ADC005",
    course:"Certificate in Machine Embroidery (3 months)"
  },{
    code:"ADC006",
    course:"Certificate in Hand Embroidery (3 months)"
  },{
    code:"ADC007",
    course:"Certificate in Wool Knitting (3 months)"
  },{
    code:"ADC008",
    course:"Certificate in Lace making (3 months)"
  },{
    code:"ADC009",
    course:"Certificate in Decorative Stitches (3 months)"
  },{
    code:"ADC010",
    course:"Certificate in Crochet work (3 months)"
  },{
    code:"ADC011",
    course:"Certificate in Batik Printing( 3 months)"
  },{
    code:"ADC012",
    course:"Certificate in Fabric Painting (3 months)"
  },{
    code:"ADC013",
    course:"Certificate in Rubber Painting (3 months)"
  },{
    code:"ADC014",
    course:"Certificate in Saree Designing (3 months)"
  },{
    code:"ADC015",
    course:"Certificate in Electric Embroidery Machine Operator (3 months)"
  },{
    code:"ADC016",
    course:"Certificate in Tailor(6 months)"
  },{
    code:"ADC017",
    course:"Certificate in Costume Designing & Dress Making Skills (6 months)"
  },{
    code:"ADD018",
    course:"Diploma in Fine Arts Studio"
  },{
    code:"ADD019",
    course:"Diploma in Visual Arts"
  },{
    code:"ADD020",
    course:"Diploma in Art & Craft"
  },{
    code:"ADD021",
    course:"Diploma in Visual and Creative Arts"
  },{
    code:"ADD022",
    course:"Diploma in Design Interior & Exhibition"
  },{
    code:"ADD023",
    course:"Diploma in Photography"
  },{
    code:"ADD024",
    course:"Diploma in Illustration"
  },{
    code:"ADD025",
    course:"Diploma in Fashion Technology"
  },
  {
    code:"ADD026",
    course:"Diploma in Computerised Fashion Designing"
  },{
    code:"ADD027",
    course:"Diploma in Dress Making Techniques"
  },{
    code:"ADD028",
    course:"Diploma in Costume Designing Technology"
  },{
    code:"ADD029",
    course:"Diploma in Shirt & Pant Making Techniques"
  },{
    code:"ADD030",
    course:"Diploma in Tailoring Trainer"
  },{
    code:"ADD031",
    course:"Diploma in Garment Technology"
  },{
    code:"ADD032",
    course:"Diploma in Computer Aided Fashion Designing"
  },{
    code:"ADA033",
    course:"Advanced Diploma in Fine Arts"
  },{
    code:"ADA034",
    course:"Advanced Diploma in Fashion & Garment Technology"
  },{
    code:"ADA035",
    course:"Advanced Diploma in Computer Aided Fashion technology"
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

export default ArtandDesign_Table