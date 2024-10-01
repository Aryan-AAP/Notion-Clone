"use client";

import Document from "@/components/Document";

const DocumentPage = ({ params: { id } }: { params: { id: string } }) => {
 //defaults to above if env variables are not used

  return <div className="flex flex-row flex-1 min-h-screen ">
    
   <Document id={id} />
 
   
   </div>;
};
export default DocumentPage;
