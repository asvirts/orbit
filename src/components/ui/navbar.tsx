import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <div className="py-5">
      <div className="flex items-center justify-between">
        <div className="text-4xl">orbit</div>
        <ul className="flex items-center justify-between">
          <li className="mx-2">
            <Link href="/">home</Link>
          </li>
          <li className="mx-2">
            <Link href="/friends">friends</Link>
          </li>
          <li className="mx-2">
            <Link href="/profile">profile</Link>
          </li>
          <li className="mx-2">
            <Link href="/notifications">notifications</Link>
          </li>
          <li className="mx-2">
            <Link href="/settings">settings</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
