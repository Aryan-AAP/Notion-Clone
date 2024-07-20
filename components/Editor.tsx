import { useRoom, useSelf } from "@liveblocks/react/suspense"
import { useEffect, useState } from "react";
import * as Y from 'yjs';

import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

import {BlockNoteView} from '@blocknote/shadcn'
import { BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import '@blocknote/shadcn/style.css'
import '@blocknote/core/fonts/inter.css'
import stringToColor from "@/lib/stringToColor";
import TranslateDocument from "./TranslateDocument";
import ChatToDocument from "./ChatToDocument";
type EditorProps = {
    doc:Y.Doc
    provider:any;
    darkMode:boolean
}

const BlockNode = ({ doc, provider, darkMode }: EditorProps) => {
    const userInfo=useSelf((me)=>me.info);
    const editor:BlockNoteEditor=useCreateBlockNote({
        collaboration:{
            provider,
            fragment:doc.getXmlFragment('document-store'),
            user:{
                name:userInfo?.name,
                color:stringToColor(userInfo?.email)
            }    
        }
    });

  return (
    <div className="relative max-w-6xl mx-auto ">
        <BlockNoteView editor={editor} theme={darkMode?"dark":"light"} className="min-h-screen" />
    </div>
  )
}
// export default BlockNode;










const Editor = () => {
    const room =useRoom();
    const [doc,setDoc]=useState<Y.Doc>()
    const [provider,setProvider]=useState<LiveblocksYjsProvider>()
    const [darkMode,setDarkMode]=useState(false)

useEffect(() => {

    const ydoc=new Y.Doc();
    const yProvider=new LiveblocksYjsProvider(room,ydoc);
    setDoc(ydoc);
    setProvider(yProvider);
    return ()=>{
        yProvider?.destroy();
        ydoc?.destroy();
    }
}, [room
    
])
if(!doc || !provider){
    return null;
}


    const style=darkMode?"text-gray-300 bg-gray-700 hower:bg-gray-100 hower:text-grey-700" :"text-gray-700 hower:text-grey-700 bg-gray-200 hower:bg-gray-00"
  return (
    <div className="mx-auto max-w-6xl ">
        
    <div className="flex items-center gap-2 justify-end ">
        {/* translate document  */}
        <TranslateDocument doc={doc} />
        {/* chatto document  */}
        <ChatToDocument doc={doc} />
        {/* Dark mode   */}
        <Button className={style} onClick={()=>setDarkMode(!darkMode)}
        >
            {darkMode?<SunIcon/>:<MoonIcon/>
            }
        </Button>
    </div>
{/* block mode  */}
<BlockNode  doc={doc}  provider={provider} darkMode={darkMode} />

    </div>
  )
}
export default Editor