'use client';

import { createClient } from "@/utils/supabase/client";

export default function SignInWithGithub() {

  const supabase = createClient()

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })

    if (error) {
      console.error('GitHub認証中にエラーが発生しました:', error)
    }
  }

  return (
    <div>
        <button onClick={signInWithGithub}>GitHubでログイン</button>
    </div>
  )
}