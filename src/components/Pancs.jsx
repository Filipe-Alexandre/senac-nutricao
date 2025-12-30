import Carousel from "./Carousel/Carousel"
import { swipPancs } from "../data/swipPancs"
export default function Pancs() {
    return (
        <section id="pancs">
            <h2>Conheça as Pancs</h2>
            <h3>O que são PANCs?</h3>
            <p>São plantas comestíveis pouco usadas no dia a dia, mas muito ricas em fibras, vitaminas, minerais e
                antioxidantes.</p>
            <h3>Sustentabilidade</h3>
            <p>As PANCs são sustentáveis porque crescem facilmente, exigem poucos recursos e preservam a
                biodiversidade.</p>
            <h3>Principais benefícios</h3>
            <ul>
                <li>Aumentam a saciedade.</li>
                <li>Auxiliam no controle da glicemia.</li>
                <li>Baixa caloria e alta densidade nutricional.</li>
                <li>Auxiliam no controle da glicose.</li>
                <li>Reduzem a inflamação, comum em diabetes, hipertensão e obesidade.</li>
            </ul>
            <h3>Cuidados Gerais</h3>
            <ul>
                <li>Identificar corretamente as plantas para evitar espécies tóxicas.</li>
                <li>Preparar da forma adequada para reduzir substâncias irritantes (como na taioba e mangará).
                </li>
                <li>Consumir com moderação.</li>
                <li>Ter atenção ao uso junto com medicamentos.</li>
                <li>Não colher em locais contaminados, pois podem absorver metais pesados.</li>
            </ul>
            <Carousel items={swipPancs} variant="pancs" />
        </section>
    )
}
