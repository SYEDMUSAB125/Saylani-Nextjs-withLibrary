"use client"
import React, { useRef } from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaHeart } from "react-icons/fa";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
function page() {
let loveIcon = useRef()

const react= ()=>{
    loveIcon.current.style.animation = "animatePulse 0.5s ease-out 1"
    loveIcon.current.style.color="red"
   
}


  return (
    <div className='min-h-screen  flex justify-center items-center'>
      <Card className="h-72 w-96">
  <CardHeader>
    <div className='flex gap-x-3 items-center '>
        <Avatar>
  <AvatarImage src="/user.jpg" />
  <AvatarFallback>
    SM
  </AvatarFallback>
</Avatar>
    <CardTitle>Joseph Underson</CardTitle>
    
    </div>
    <CardDescription>posted 2h ago</CardDescription>
    <CardAction>
        <Button variant='outline' className="bg-gray-100"
    onClick={react}
    >
  <FaHeart   ref={loveIcon}
    />
</Button>
</CardAction>
  </CardHeader>
  <CardContent>
    <p>Looking for SM manager to create
posts across various platforms</p>
    <p className='text-gray-300 text-[12px]'>We're seeking a skilled Social Media Manager to ...</p>
    <div className='mt-2 gap-2 flex '>
         <Button variant="secondary" className="bg-sky-100">
  SMM
</Button >
     <Button variant="secondary" className="bg-sky-100">
  Growth Strategy
</Button>
     <Button variant="secondary" className="bg-sky-100">
  Startup
</Button>
     <Button variant="secondary" className="bg-sky-100">
 Brand
</Button>
   
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
    </div>
  )
}

export default page
