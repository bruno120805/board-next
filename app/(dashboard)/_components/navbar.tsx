'use client'

import { UserButton } from "@clerk/nextjs"

export default function NavBar() {

  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500" >
      <div className="hidden lg:flex lg:flex-1">
        {/* TODO ADD SEARHC */}
      </div>
      <UserButton />
    </div>
  )
}