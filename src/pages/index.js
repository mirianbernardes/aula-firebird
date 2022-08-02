import useAuth from "../hooks/useAuth"

export default function Home() {
  
  const { signinGoogle, signout } = useAuth();

  return (
    <div>
      <h1> OLA MUNDO !!</h1>
      <button onClick={signinGoogle}>Logar Google</button>
      <p>&nbsp;</p>
      <button onClick={signout}>Deslogar</button>
    </div>
  )
}
