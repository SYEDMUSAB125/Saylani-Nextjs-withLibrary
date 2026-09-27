import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
function Mycard() {
  return (
    <div className='mt-4'>
      <Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>
    <CardDescription>
      Your profile information
    </CardDescription>
  </CardHeader>

  <CardContent>
    Content goes here
  </CardContent>

  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default Mycard
