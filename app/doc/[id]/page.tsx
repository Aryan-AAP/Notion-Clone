"use client";

import Document from "@/components/Document";

const DocumentPage = ({ params: { id } }: { params: { id: string } }) => {
  return <div className="flex flex-row flex-1 min-h-screen ">
    
   <Document id={id} />
 
   
   </div>;
};
export default DocumentPage;
