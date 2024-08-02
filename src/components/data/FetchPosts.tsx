"use client"

import React, { useEffect, useState } from "react"
import { Post } from "./post"
import { createClient } from "@supabase/supabase-js"

export default function FetchPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [fetchError, setFetchError] = useState<string | null>(null)

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY

  if (!supabaseKey || !supabaseUrl) {
    throw new Error(
      "SUPABASE_SERVICE_KEY is not defined in environment variables",
    )
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("test_posts").select()

      if (error) {
        setFetchError(error.message)
        setPosts([])
      } else if (data) {
        setPosts(data as Post[])
        setFetchError(null)
      }
    }

    fetchPosts()
  }, [])
}
