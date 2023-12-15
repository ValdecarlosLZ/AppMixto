export default function NewJokeRoute() {
    return (
      <div>
        <p>Escreva sua piada engraçada</p>
        <form method="post">
          <div>
            <label>
              Nome: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Conteúdo: <textarea name="content" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
  