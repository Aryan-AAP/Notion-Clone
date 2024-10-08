'use client'

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import React, { Fragment } from "react"
  
const Breadcrumbs = () => {
    const path=usePathname()
    const segments=path.split('/');
    
  return (
<Breadcrumb className="line-clamp-1 max-md:hidden   " >
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>

    {segments.map((segment, index) => {
    if(!segment) return null;
    const href = `/${segments.slice(0, index + 1).join('/')}`;return(
       <Fragment  key={segment}>
       <BreadcrumbSeparator/>
       <BreadcrumbItem>
          
          <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
        </BreadcrumbItem>
       </Fragment>
        // </xBreadcrumbItem>
    )
    })}
 
  </BreadcrumbList>
</Breadcrumb>

  )
}
export default Breadcrumbs