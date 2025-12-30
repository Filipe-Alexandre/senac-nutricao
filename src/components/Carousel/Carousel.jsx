import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Carousel({ items, variant }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        0: {       
          slidesPerView: 1,
        },
        576: {     
          slidesPerView: 2,
        },
        768: {     
          slidesPerView: 3,
        },
        1200: {   
          slidesPerView: 4,
        },
      }}
    >
      {items.map(item => (
        <SwiperSlide key={item.id}>
          <div className="card card-swip border rounded-4 p-2">
            <img
              src={item.image}
              alt={item.alt}
              className="card-img-top rounded-3 mb-1"
            />

            <div className="card-body">
              <h3 className="fs-3 fw-semibold mb-1">
                {item.title}
              </h3>

              {/* ERVAS */}
              {variant === 'ervas' && (
                <>
                  <p className="mb-3">
                    <strong>Combinações:</strong> {item.combinacoes}
                  </p>
                  <p className="text-muted">
                    {item.funcao}
                  </p>
                </>
              )}

              {/* PANCS */}
              {variant === 'pancs' && (
                <>
                  <p>
                    <strong>Parte utilizada:</strong> {item.parteUtilizada}
                  </p>
                  <p>
                    <strong>Toxicidade:</strong> {item.toxicidade}
                  </p>
                  <p className="text-muted">
                    <strong>Modo de preparo:</strong> {item.modoPreparo}
                  </p>
                </>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
