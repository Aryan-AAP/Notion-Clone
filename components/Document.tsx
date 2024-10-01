"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FormEvent, useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./InviteUser";
import ManageUsers from "./ManageUsers";
import Avatars from "./Avatars";
import Cloudd from "@/components/cloud/Cloudd";
// import CompilerCode from "./compiler/CompilerCode";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import CompilerCode from "./compiler/CompilerCode";

const Document = ({ id }: { id: string }) => {
  
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  // useTransition
  const [isUpdating, startTransition] = useTransition();
  const isOwner=useOwner();

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  };

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  return (
    <div className="flex-1 h-full overflow-y-hidden bg-white p-5">
      <div className="flex max-w-6xl  mx-auto  justify-between pb-5">
        <form className="flex flex-1  space-x-2 " onSubmit={updateTitle}>
          {/* update title */}
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={isUpdating} type="submit">
            {isUpdating ? "Updating..." : "Update"}
          </Button>
          {/* if */}
          {/* is owner && invite user delete document */}
          { isOwner &&(
            <>
            {/* invite users  */}
<InviteUser />
            {/* delete document */}
            <DeleteDocument />
            {/* <p>I own this</p> */}
            </>
          )}
        </form>
      </div>

      <div className="flex max-w-6xl mx-auto justify-between items-center mb-5">
        {/* manage user */}
<ManageUsers />
        {/* avatars */}
        <Avatars />
      </div>
<hr  className="pb-10"/>
      
 <div className=" hidden lg:block" >

<ResizablePanelGroup className="flex-1 "   direction={`horizontal`} >
  <ResizablePanel>
     
      {/* collaborative editor */}
      <Editor />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
        
{/* coode part from here  */}
{/* <CompilerCode /> */}
<Cloudd />

  </ResizablePanel>
</ResizablePanelGroup>
 </div>

<div className=" lg:hidden ">
<Tabs defaultValue="account" className="w-full">
<div className="flex p-2 justify-center " >
    <TabsList className="flex justify-center gap-4   max-w-[400px] " >
    <TabsTrigger value="account">White Board </TabsTrigger>
    <TabsTrigger value="password">Editor</TabsTrigger>
  </TabsList>
  </div>
  <TabsContent value="account">
  <Editor />
    
  </TabsContent>
  <TabsContent value="password">
  <CompilerCode />
  </TabsContent>
</Tabs>

</div>







    </div>
  );
};

export default Document;
