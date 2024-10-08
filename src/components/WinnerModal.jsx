import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó:'

    return (
        winner !== null && (
            <section className="winner">
              <div className="text">
                <h1>
                  {winnerText}
                </h1>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Empezar de Nuevo</button>
                </footer>
              </div>
            </section>
          )
    )
}