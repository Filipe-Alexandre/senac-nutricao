import Carousel from "./Carousel/Carousel"
import { swipErvas } from "../data/swipErvas"

export default function ErvasEspeciarias() {
  return (
        <section id="erv-esp">
            <details>
                <summary className="fw-bold fs-5 mb-3">Por que usar ervas e especiarias?</summary>
                <ul>
                    <li>Reduzem o uso de sal e gordura.</li>
                    <li>Trazem aroma, sabor e antioxidantes.</li>
                    <li>São baratas, versáteis e acessíveis.</li>
                </ul>
            </details>
            <Carousel items={swipErvas} variant="ervas" />
        </section>
  )
}
