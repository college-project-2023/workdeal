import React, { useEffect } from 'react';
import Swal from 'sweetalert';



const Success = () => {

  useEffect(() => {
    Swal({
      title: 'Payment Done!',
      text: "Thank you for completing your secure online payment\n\t\tHave a great day!",
      icon: 'success',
      customClass: {
        confirmButton: 'btn btn-success'
      }
    }).then(() => {
      // Redirect to the account page upon confirmation
      window.location.href = '/account?status=success';
    });
  }, [])
  return (
    <>
    
    </>
//     <div className='w-20'>

// <div className="flex items-center justify-center h-screen">
//       <div className="bg-white p-6 md:w-1/2 items-center justify-center h-screen shadow-lg rounded-lg">
//         <svg viewBox="0 0 24 24" className="text-green-600 w-8 h-8 mx-auto my-6" width="64" height="64">
//           <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
//         </svg>
//         <div className="text-center">
//           <h3 className="md:text-2xl text-base text-gray-900 font-semibold">Payment Done!</h3>
//           <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
//           <p> Have a great day! </p>
//           <div className="py-10 text-center">
//             <a href="/account?status=sucess" className="px-12 bg-green-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-full">
//               continue
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
    
  );
};

export default Success;
