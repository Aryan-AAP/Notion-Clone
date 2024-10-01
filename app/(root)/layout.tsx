import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
   {/* <Header/> */}

{/* <div className="min-h-screen flex">
  <Sidebar />

<div  className="flex-1 p-4 bg-gray-100 scrollbar-hide overflow-y-auto">
        {children}

</div>
        </div> */}

        {children}
  </>;
};
export default PageLayout;
