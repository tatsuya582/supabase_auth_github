import { createClient } from "@/utils/supabase/server";
import { logout } from "../actions/sever_actions";
import SignInWithGithub from "../component/signInWithGithub";
import { login, signup } from "./actions";

export default async function LoginPage() {
  const supabase = createClient();

  const {data: { user }} = await supabase.auth.getUser();

  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      {user ? (
        <form action={logout}>
          <button type="submit">ログアウト</button>
        </form>
      ) : (
        <SignInWithGithub/>
      )}
    </>
    
  )
}