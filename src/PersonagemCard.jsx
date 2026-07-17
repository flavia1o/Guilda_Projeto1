function PersonagemCard({ nome, classe, nivel, habilidades, vivo }) {
    return (
        <div>
            <h2>{nome}</h2>

            <p>Classe: {classe}</p>

            <p>Nível: {nivel}</p>

            <p>
                Status:
                {vivo ? " Vivo" : " Morto"}
            </p>

            <h4>Habilidades</h4>

            <ul>
                {habilidades.map((habilidade, index) => (
                    <li key={index}>
                        {habilidade}
                    </li>
                ))}
            </ul>

            <hr />
        </div>
    );
}

export default PersonagemCard;
