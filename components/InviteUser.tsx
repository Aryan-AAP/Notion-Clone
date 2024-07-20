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
import { deleteDocument, inviteUserToDocument } from "@/actions/action";
import { toast } from "sonner";

const InviteUser = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleInvite = async (e: FormEvent) => {
    e.preventDefault()
    const roomId=pathname.split('/').pop();
if(!roomId) return;
    
    startTransition(async () => {
      const { success } = await inviteUserToDocument(roomId,email);
      if (success) {
        setIsOpen(false);
        setEmail('');
        toast.success("Emaill Added to Room Successfully");
      } else {
        toast.error("Fauled to add the user");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"outline"}>
        <DialogTrigger>Invite </DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a User to Collaborate! </DialogTitle>
          <DialogDescription>
            Enter the email of the user you want to invite
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleInvite}  className="flex gap-2">
          <Input
            type="email"
            placeholder="Email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            // className="w-full"
            type="submit"
            disabled={isPending || !email}
          >
            {isPending ? "Inviting..." : "Invite"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default InviteUser;
