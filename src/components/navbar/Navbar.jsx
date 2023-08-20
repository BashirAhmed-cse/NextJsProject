import Link from 'next/link'
import React from 'react'

 const links = [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:1,
        title:"Home",
        url:"/",
    },
 ]

function Navbar() {
  return (
    <div>
       <Link href="/">Bashir</Link>
    </div>
  )
}

export default Navbar
