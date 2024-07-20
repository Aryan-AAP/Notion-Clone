"use client"
import { useTransition } from "react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { createNewDocument } from "@/actions/action"
import { useUser } from "@clerk/nextjs"

const NewDocumentButton = () => {
const [isPending, startTransition] = useTransition()
const router=useRouter()
const {user}=useUser()
const handleCreateNewDocument = () => {
    if(!user){
      router.push('/sign-in')
      return
    }
    startTransition(async() => {
      const {docId}=await createNewDocument();
      
      router.push(`/doc/${docId}`)
    })

       

  }
  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending} >{isPending?"Creating...":"New Documnet"}</Button>
  )
}
export default NewDocumentButton