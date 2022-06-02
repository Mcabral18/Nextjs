
import Navbar from "/components/en/navbar"
import Footer from "/components/en/footer"
import Hero from "/components/hero"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <div id="section1" className="section1">
                    <div className="max-w-5xl mx-auto px-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="wrapper-image md:-mt-20">
                                <img src="https://dev.legendary.pt/cbre_landing/wp-content/uploads/2022/05/edificio2.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <div className="wrapper-content">
                                    <div className="mark-section flex items-center py-3 md:py-8">
                                        <hr className="w-12" />
                                        <span className="text-green text-bold px-4 uppercase">Edifício</span>
                                    </div>
                                    <div className="title text-4xl">
                                        <p className="text-left text-bold">Escritórios Lisboa EN</p>
                                    </div>
                                    <div className="sub-title text-3xl">
                                        <p className="text-left text-medium">Alexandre Herculano 50</p>
                                    </div>
                                    <div className="specs">
                                        <p className="text-left">O Alexandre Herculano 50 é um edifício de escritórios com 11 pisos, 10.600m 2 e 122 estacionamentos em cave.</p>
                                        <ul>
                                            <li className="text-left">Pisos-tipo com 1.016m<sup>2</sup></li>
                                            <li className="text-left">Rendas isentas de IVA</li>
                                            <li className="text-left">Disponibilidade: novembro 2021</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section2" className="section2">
                    <div className="max-w-5xl mx-auto px-3 mt-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="column-inner mt-5 mt-md-3">
                                <div className="icon">
                                    <img className="h-10" src="https://alexandreherculano50.pt/wp-content/uploads/2021/10/planta.png" alt="Icon" />
                                </div>
                                <div className="description pt-3">
                                    <p className="text-left uppercase text-green">Planta</p>
                                </div>
                                <div className="place">
                                    <p className="text-left">Planta Tipo (piso 7)</p>
                                </div>
                                <div className="arrow">
                                    <a href="#" target="_blank">
                                        <Image src="/img/svg/arrow.svg" alt="Arrow" width={40} height={8} />
                                    </a>
                                </div>
                            </div>
                            <div className="column-inner mt-5 mt-md-3">
                                <div className="icon">
                                    <img className="h-10" src="https://alexandreherculano50.pt/wp-content/uploads/2021/10/loc-black.png" alt="Icon" />
                                </div>
                                <div className="description pt-3">
                                    <p className="text-left uppercase text-green">Planta</p>
                                </div>
                                <div className="place">
                                    <p className="text-left">Planta Tipo (piso 7)</p>
                                </div>
                                <div className="arrow">
                                    <a href="#" target="_blank">
                                        <Image src="/img/svg/arrow.svg" alt="Arrow" width={40} height={8} />
                                    </a>
                                </div>
                            </div>
                            <div className="column-inner mt-5 mt-md-3">
                                <div className="icon">
                                    <img className="h-10" src="https://alexandreherculano50.pt/wp-content/uploads/2021/10/carac.png" alt="Icon" />
                                </div>
                                <div className="description pt-3">
                                    <p className="text-left uppercase text-green">Planta</p>
                                </div>
                                <div className="place">
                                    <p className="text-left">Planta Tipo (piso 7)</p>
                                </div>
                                <div className="arrow">
                                    <a href="#" target="_blank">
                                        <Image src="/img/svg/arrow.svg" alt="Arrow" width={40} height={8} />
                                    </a>
                                </div>
                            </div>
                            <div className="column-inner mt-5 mt-md-3">
                                <div className="icon">
                                    <img className="h-10" src="https://alexandreherculano50.pt/wp-content/uploads/2021/10/phone.png" alt="Icon" />
                                </div>
                                <div className="description pt-3">
                                    <p className="text-left uppercase text-green">Planta</p>
                                </div>
                                <div className="place">
                                    <p className="text-left">Planta Tipo (piso 7)</p>
                                </div>
                                <div className="arrow">
                                    <a href="#" target="_blank">
                                        <Image src="/img/svg/arrow.svg" alt="Arrow" width={40} height={8} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section3" className="section3 max-w-5xl mx-auto md:px-3 mt-10">
                    <div className="wrapper-content p-4 pb-10 md:p-10 bg-slate-100">
                        <div className="mark-section flex items-center py-3">
                            <hr className="w-12" />
                            <span className="text-green text-bold uppercase px-3">Edifício</span>
                        </div>
                        <div className="title mb-4">
                            <h2 className="text-left text-medium text-3xl"><span className="text-bold">Detalhes</span> do edifício</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="building-details pt-10">
                                <div className="detail flex justify-between px-5 mb-2 pb-1 text-green border-b border-b-red-500 text-sm">
                                    <span>Piso 1</span>
                                    <p className="mb-0">100m</p>
                                </div>
                                <div className="detail flex justify-between px-5 mb-2 pb-1 text-green border-b border-b-red-500 text-sm">
                                    <span>Piso 1</span>
                                    <p className="mb-0">100m</p>
                                </div>
                                <div className="detail flex justify-between px-5 mb-2 pb-1 text-green border-b border-b-red-500 text-sm">
                                    <span>Piso 1</span>
                                    <p className="mb-0">100m</p>
                                </div>
                                <div className="cta-primary mt-8 bg-green inline-block border-2 px-10 py-3 text-white hover:bg-white hover:text-green hover:border-solid hover:border-2 hover:border-green">
                                    <a className="text-sm" href="#" target="_blank">
                                        Contacte-nos
                                        <span className="icon"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="wrapper-slider">
                                <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Pagination,]}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide><img src="https://dev.legendary.pt/cbre_landing/wp-content/uploads/2022/05/detalhes3.jpg" alt="Slider - Image" /></SwiperSlide>
                                    <SwiperSlide><img src="https://dev.legendary.pt/cbre_landing/wp-content/uploads/2022/05/detalhes3.jpg" alt="Slider - Image" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section4" className="section4 max-w-5xl mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="wrapper-content inline-flex flex-col justify-center p-5">
                            <div className="mark-section flex items-center py-6">
                                <hr className="w-12" />
                                <span className="text-green text-bold uppercase px-3">Características</span>
                            </div>
                            <div className="title pb-2">
                                <h2 className="text-left text-medium text-3xl"><span className="text-bold">Prédio de escritórios</span> exclusivo</h2>
                            </div>
                            <div className="specs">
                                <p className="text-left">Edifício disponível em novembro de 2021.</p>
                                <ul className="pl-8 list-disc">
                                    <li className="text-left">Rooftop com vista 360º</li>
                                    <li className="text-left">Amplas vistas para a frente ribeirinha</li>
                                    <li className="text-left">50 lugares de estacionamento privativo</li>
                                    <li className="text-left">Sistema de AVAC instalado</li>
                                    <li className="text-left">Copa</li>
                                    <li className="text-left">Balneários e 2 instalações sanitárias em cada piso</li>
                                    <li className="text-left">2 Elevadores e 3 núcleos de escadas</li>
                                </ul>
                            </div>
                        </div>
                        <div className="wrapper-image mt-md-0 mt-4">
                            <img src="https://dev.legendary.pt/cbre_landing/wp-content/uploads/2022/05/exterior1.jpg" />
                        </div>
                    </div>
                </div>
                <div id="section5" className="section5 max-w-5xl mx-auto mt-10">
                    <div className="wrapper-localization px-4 md:px-8 py-12 bg-slate-100">
                        <div className="grid md:grid-flow-col gap-6">
                            <div className="map-holder md:col-span-3">
                                <div className="title mb-8">
                                    <h2 className="text-left text-medium text-3xl mb-3"><span className="text-bold">Localização e Envolvente</span></h2>
                                </div>
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                        width="100%"
                                        height="450"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    />
                                </div>
                            </div>
                            <div className="locals md:col-span-2">
                                <div className="cta-primary mb-4 md:mb-8 bg-green inline-block border-2 px-10 py-3 text-white hover:bg-white hover:text-green hover:border-solid hover:border-2 hover:border-green">
                                    <a className="text-sm" href="#" target="_blank">
                                        Ver no mapa
                                    </a>
                                </div>
                                <ul className="mt-5">
                                    <li className="text-green border-b border-green mb-3">
                                        <a href="#" target="_blank">Transportes</a>
                                    </li>
                                    <li className="text-green border-b border-green mb-3">
                                        <a href="#" target="_blank">Ammenities</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section6" className="section6 max-w-5xl mx-auto mt-10">
                    <div className="wrapper-content px-3 md:px-0">
                        <div className="row">
                            <div className="col-12">
                                <div className="mark-section flex items-center py-6">
                                    <hr className="w-12" />
                                    <span className="text-green text-bold uppercase px-3">Edifício</span>
                                </div>
                                <div className="copy">
                                    <div className="title mb-8">
                                        <h2 className="text-left text-medium text-3xl"><span className="text-bold">Detalhes</span> do edifício</h2>
                                    </div>
                                    <p>O edifício Alexandre Herculano 50 reúne a localização, o espaço e a capacidade de adaptação que procura para a sua empresa. As renovações que foram feitas valorizam e modernizam este espaço icónico no centro da cidade da Lisboa.</p>
                                    <p>As renovações que foram feitas valorizam e modernizam este espaço icónico no centro da cidade da Lisboa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section7" className="section7 mt-10 bg-green">
                    <div className="section7 max-w-5xl mx-auto py-12 px-3 md:px-0">
                        <div className="grid md:grid-flow-col gap-6">
                            <div className="md:col-span-3">
                                <div className="title flex md:justify-center">
                                    <h2 className="text-left text-white text-medium text-3xl"><span className="text-bold">Detalhes</span> do edifício</h2>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <div className="wrapper-cta flex md:justify-center">
                                    <div className="cta-primary inline-block border-2 border-transparent px-10 py-3 bg-white text-green hover:border-solid hover:border-2 hover:border-green">
                                        <a className="text-sm" href="#" target="_blank">
                                            Ver no mapa
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}