import { useState } from "react";
import { receitasData } from "../data/modalReceitas.js";


export default function Aproveitamento() {
    const [modalAberta, setModalAberta] = useState(null);

    const abrirModal = (id) => setModalAberta(id);
    const fecharModal = () => setModalAberta(null);

    return (
        <section id="apr-ali" className="container my-5">
            <h2 className="mb-4">Aproveitamento integral dos alimentos</h2>

            <details className="mb-3">
                <summary className="fw-bold fs-5 mb-2">Por que aproveitar integralmente?</summary>
                <ul className="mb-0">
                    <li>Reduz desperdício.</li>
                    <li>Aumenta fibras, vitaminas e economia.</li>
                </ul>
            </details>

            <details className="mb-4">
                <summary className="fw-bold fs-5 mb-2">Dicas Práticas</summary>
                <ul className="mb-0">
                    <li>Talos no feijão (salsinha, couve, brócolis).</li>
                    <li>Cascas em farofas (banana, abóbora, batata).</li>
                    <li>Folhas em caldos e refogados (cenoura, beterraba).</li>
                    <li>Sementes torradas (abóbora, melão).</li>
                </ul>
            </details>

            <div className="receitas">
                <h3 className="mb-4">Receitas Rápidas</h3>
                <div className="cards d-flex flex-column gap-3">
                    {
                        receitasData.map(r => (
                            <div
                                key={r.id}
                                className="card flex-fill"
                                style={{ backgroundImage: `url(${r.imagem})` }}
                                onClick={() => abrirModal(r.id)}
                            >
                                <div className="overlay h-100 d-flex justify-content-left align-items-end">
                                    <h4 className="text-white">{r.titulo}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {modalAberta && (
                    <div
                        className="modal d-flex justify-content-center align-items-center"
                        onClick={fecharModal}   // 👈 clique fora fecha
                    >
                        <div
                            className="modal-content p-4 rounded shadow"
                            onClick={(e) => e.stopPropagation()} // 👈 bloqueia clique interno
                        >
                            <h2>{receitasData.find(r => r.id === modalAberta).titulo}</h2>

                            <h5>Ingredientes:</h5>
                            <ul>
                                {receitasData
                                    .find(r => r.id === modalAberta)
                                    .ingredientes.map((i, idx) => (
                                        <li key={idx}>{i}</li>
                                    ))}
                            </ul>

                            <h5>Modo de preparo:</h5>
                            <p>{receitasData.find(r => r.id === modalAberta).modoPreparo}</p>

                            <button
                                className="btn btn-dark mt-3"
                                onClick={fecharModal}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </section>
    );
}
