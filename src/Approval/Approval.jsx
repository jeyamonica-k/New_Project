import React from 'react'
import "../App.css"
function Approval() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 mt-5 mb-5"> {/* Added padding for small screens */}
      <div className="w-full sm:w-[75%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center sm p-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col sm:p-0.5 gap-2 p-2 m-2">
          <div className="flex flex-col gap-2 items-center border-b-2 border-red-500 ">
            <h1 className="text-[#192C57] font-bold text-xl md:text-2xl heading">HOW TO GET APPROVAL</h1> {/* Responsive text size */}
          </div>
          <div className="flex flex-col items-start gap-2 sm:px-0 px-6">
            <ul className="list-disc pl-5 spacing">
              <li>Institutional Registration document (Company, Partnership, Proprietary, Private Ltd, Public Ltd, etc.,)</li>
              <li>Building agreement (Rental/Own)</li>
              <li>Two Passport size photograph of the owner.</li>
              <li>Director's/Proprietor ID Proof</li>
              <li>Payment should be made as Online transfer in favour of Indian Council Of Vocational and Technical Education(ICVTE) Send all the details to Zonal Office Address.</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[#192C57] font-bold text-xl md:text-2xl heading">APPROVAL PROCEDURE</h1> {/* Responsive text size */}
          </div>
            <div className="flex flex-col items-start gap-2 sm:px-0 px-6">
            <ul className="list-disc pl-5 spacing">
              <li>On receipt of the above document centre will be verified by Regional Office.</li>
              <li>On receipt of verfication from Regional Office, MOU will be sent from Head Office to the centre after verifying a payment details.</li>
              <li>Centre should sign the MOU and send it either to Regional Office or Head Office.</li>
              <li>Centre affiliation certificate will be sent along with the signed MOU by ICVTE Head Office.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Approval