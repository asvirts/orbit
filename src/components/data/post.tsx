export type Post = {
  profile_picture: string
  profile_name: string
  time_posted: Date
  visibility: string
  likes: number
  comments: number
  shares: number
  images: string[]
  text: string
}

import React from "react"
import Image from "next/image"

export default function UserPost(props: Post) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          <div>
            <Image
              src={props.profile_picture}
              alt={props.profile_name}
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>{props.profile_name}</div>
        </div>
        <div>
          <div>{props.time_posted.getTime()}</div>
          <div>{props.visibility}</div>
        </div>
      </div>
      <div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
      <div>
        <Image src={props.images[0]} alt={props.profile_name} fill={true} />
      </div>
      <div className="flex justify-between">
        <div>
          <div>{props.likes}</div>
        </div>
        <div>
          <div>{props.comments}</div>
          <div>{props.shares}</div>
        </div>
      </div>
      <div>
        <div>
          <hr />
        </div>
      </div>
      <div className="flex justify-between">
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
      </div>
    </div>
  )
}
