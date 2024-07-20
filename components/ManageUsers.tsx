"use client";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { deleteDocument, inviteUserToDocument, removeUserFromDocument } from "@/actions/action";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import useOwner from "@/lib/useOwner";
import { useRoom } from "@liveblocks/react/suspense";
import { useCollection } from "react-firebase-hooks/firestore";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "@/firebase";

const ManageUsers = () => {

  const [isOpen, setIsOpen] = useState(false);
  const room =useRoom()
 const {user}=useUser();
  const [isPending, startTransition] = useTransition();
const isOwner=useOwner();


const [userInroom]=useCollection(
    user && query(collectionGroup(db,'rooms'),where('roomId','==',room.id))
)



  const handleDelete = async (userId:string) => {
startTransition(async () => {
    if(!user)return

    const {success}=await removeUserFromDocument(room.id,userId)
    if(success){
        toast.success("User Removed Successfully")
    }
    else{
        toast.error("Failed to remove user")
    }
})

  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"outline"}>
        <DialogTrigger>Users ({userInroom?.docs.length}) </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Users with access</DialogTitle>
          <DialogDescription>
            Below is a list of users who have access to this room.
            {/* Enter the email of the user you want to invite */}
          </DialogDescription>
        </DialogHeader>
<hr className="my-2" />
   <div className="flex flex-col space-y-2">
    {/* map throw users */}
    {userInroom?.docs.map((doc) => (
  <div key={doc.data().userId} className="flex items-center justify-between">
    <p className="font-light">
      {doc.data().userId === user?.emailAddresses[0].toString() ? (
        <>You ({doc.data().userId})</>
      ) : (
        doc.data().userId
      )}
    </p>

    <div className="flex items-center">
      <Button variant="outline">{doc.data().role}</Button>

      {isOwner &&
        doc.data().userId !== user?.emailAddresses[0].toString() && (
          <Button
            variant="destructive"
            onClick={() => handleDelete(doc.data().userId)}
            disabled={isPending}
            size="sm"
          >
            {isPending ? "Removing..." : "X"}
          </Button>
        )}
    </div>
  </div>
))}

   </div>
      </DialogContent>
    </Dialog>
  );
};
export default ManageUsers;
