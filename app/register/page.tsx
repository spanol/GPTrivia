export default function Register() {
  return (
    <div className="card">
      <h1>Registro</h1>
      <form className="flex flex-col gap-4">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha" />
        <button type="submit" className="button-primary">
          Registrar
        </button>
      </form>
    </div>
  );
}
