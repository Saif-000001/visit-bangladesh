import React from "react";
import { useParams, Link } from "react-router-dom";
import { EXPERIENCES } from "../../Constants";

function DescribeExperiences() {
   const { id } = useParams();
   const exprience = EXPERIENCES.find((exp) => exp.id === parseInt(id, 10));

   if (!exprience) {
     return (
       <div className="text-center mt-20 mx-4 sm:mx-16 md:mx-32">
         <h1 className="text-4xl text-red-600">exprience not found</h1>
         <p>
           <a href="/all-expriences" className="text-blue-600 underline">
             Go back to all expriences
           </a>
         </p>
       </div>
     );
   }

   return (
     <div className="py-20 max-w-4xl mx-auto px-4 sm:px-8">
       {/* Title Section */}
       <h1 className="text-5xl font-extrabold text-center text-black mb-6">
         {exprience.name}
       </h1>

       {/* Image Section */}
       <div className="flex justify-center mb-8">
         <img
           src={exprience.img}
           alt={exprience.name}
           className="w-full h-96 object-cover rounded-lg shadow-lg"
         />
       </div>

       {/* Description Section */}
       <p className="text-lg text-gray-700 leading-relaxed mb-6">
         {exprience.description}
       </p>

       {/* Placeholder Text */}
       <p className="text-lg text-gray-700 leading-relaxed">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at
         nam sunt suscipit mollitia odit tempora ducimus nihil consequuntur
         earum! Dicta quas odio dignissimos praesentium fugiat dolore, sapiente
         aliquam voluptas. Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Aut nobis fugit blanditiis. Unde doloribus magni doloremque a
         suscipit voluptatem rerum facilis nemo, incidunt ad qui ipsum? Ducimus
         placeat sit saepe?
       </p>
     </div>
   );
}

export default DescribeExperiences;
