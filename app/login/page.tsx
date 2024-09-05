export default function Login() {
  return (
    <div className="card">
      <h1>Login</h1>
      <form className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha" />
        <button type="submit" className="button-primary">
          Entrar
        </button>
      </form>
    </div>
  );
}
