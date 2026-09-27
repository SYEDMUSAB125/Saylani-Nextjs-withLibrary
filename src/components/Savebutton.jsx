import React from 'react'
import { Button } from "@/components/ui/button"
function Savebutton() {
  return (
    <div>
      {/* <Button className="bg-pink-500 hover:bg-pink-400" size="lg">Save</Button>
      <Button variant="secondary">
  Secondary
</Button>
<Button variant="outline">
  Outline
</Button>

<Button variant="ghost">
  Ghost
</Button>

<Button variant="destructive">
  Delete
</Button>

<Button variant="link">
  Learn More
</Button>
<Button size="sm">
  Small
</Button>

<Button size="default">
  Default
</Button>

<Button size="lg">
  Large
</Button>

<Button size="icon">
  +
</Button> */}


<div className="flex gap-2">
  <Button>Save</Button>

  <Button variant="outline">
    Cancel
  </Button>

  <Button variant="destructive">
    Delete
  </Button>
</div>
    </div>
  )
}

export default Savebutton
