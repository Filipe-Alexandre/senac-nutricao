export default function Sobre() {
    return (
        <section id="sobre">
            <div className="intro fs-2">
                <p className="text-center">
                    A alimentação tem um papel decisivo na prevenção da <strong>obesidade, hipertensão e diabete</strong>.
                    Pequenas escolhas no dia a dia - como usar mais ervas naturais, reduzir sal e açúcar, e incluir
                    alimentos integrais e variados - ajudam a controlar o peso, pressão e glicemia.
                </p>
                <p className="text-center">
                    Este site traz <strong>dicas práticas, orientações simples</strong>, receitas rápidas e vídeos temáticos
                    que facilitam a aplicação de tudo na rotina.
                </p>
            </div>
            <div className="secoes d-flex flex-grow gap-3 justify-content-center flex-wrap mt-4">
                <span><a href="#erv-esp">Ervas e especiarias</a></span>

                <span><a href="#erv-com-fun">Ervas, combinações e funções</a></span>

                <span><a href="#apr-ali">Aproveitamento integral dos alimentos</a></span>

                <span><a href="#pancs">PANCs</a></span>

                <span><a href="#videos">Vídeos</a></span>
            </div>
        </section>
    )
}
