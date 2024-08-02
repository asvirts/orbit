import React, { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import UserPost, { Post } from "../components/data/post"
import FetchPosts from "@/components/data/FetchPosts"

export default function Home() {
  ;<FetchPosts />

  const postList =
    posts?.map((post: Post) => (
      <UserPost
        key={post.time_posted.toUTCString()}
        profile_picture={post.profile_picture}
        profile_name={post.profile_name}
        time_posted={post.time_posted}
        visibility={post.visibility}
        likes={post.likes}
        comments={post.comments}
        shares={post.shares}
        text={post.text}
      />
    )) || []

  return (
    <main className="py-5">
      <h1>The Social Circle That Revolves Around You.</h1>
      <div className="columns-4">
        {fetchError && <p>{fetchError}</p>}
        {posts &&
          posts?.map((post: Post) => (
            <UserPost
              key={post.time_posted.toUTCString()}
              profile_picture={post.profile_picture}
              profile_name={post.profile_name}
              time_posted={post.time_posted}
              visibility={post.visibility}
              likes={post.likes}
              comments={post.comments}
              shares={post.shares}
              text={post.text}
            />
          ))}
      </div>
    </main>
  )
}
