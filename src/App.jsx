import PersonagemCard from "./PersonagemCard";

function App() {

    const listaPersonagens = [
        {
            id: 1,
            nome: "Arthas",
            classe: "Guerreiro",
            nivel: 15,
            habilidades: ["Espada", "Escudo", "Investida"],
            vivo: true
        },
        {
            id: 2,
            nome: "Merlin",
            classe: "Mago",
            nivel: 20,
            habilidades: ["Bola de Fogo", "Teleportar", "Raio"],
            vivo: true
        },
        {
            id: 3,
            nome: "Sylvanas",
            classe: "Arqueira",
            nivel: 18,
            habilidades: ["Flecha Precisa", "Camuflagem", "Tiro Múltiplo"],
            vivo: false
        }
    ];

    return (
        <div>
            <h1>Guilda de Aventureiros</h1>

            {listaPersonagens.map((personagem) => (
                <PersonagemCard
                    key={personagem.id}
                    nome={personagem.nome}
                    classe={personagem.classe}
                    nivel={personagem.nivel}
                    habilidades={personagem.habilidades}
                    vivo={personagem.vivo}
                />
            ))}
        </div>
    );
}

export default App;
