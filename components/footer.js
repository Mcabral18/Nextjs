import Image from 'next/image'

function Footer() {

    return (
        <footer id="footer">
            <div className="wrapper-footer mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="left-column py-10 px-3 md:px-0" style={{ backgroundColor: "#363636" }}>
                        <div className="text-column text-md-center text-left">
                            <div className="title">
                                <h5 className="text-white md:text-center text-light mb-4 text-2xl">- Contacto -</h5>
                            </div>
                        </div>
                        <div className="text">
                            <h4 className="text-white md:text-center text-md-center text-4xl mb-1">Solicite</h4>
                        </div>
                        <div className="text">
                            <h4 className="text-white md:text-center text-md-center text-light text-2xl">mais informações</h4>
                        </div>
                    </div>
                    <div className="right-column py-5 md:py-10 px-3 md:px-0">
                        <div className="cbre-logo mb-4 mb-md-0">
                            <Image src="/img/svg/cbre-logo.svg" alt="Logo - CBRE" width={150} height={38} />
                        </div>
                        <div className="contacts">
                            <div className="phone inline-flex mt-3">
                                <span className="icon mr-3">
                                    <Image src="/img/svg/phone.svg" alt="Email - CBRE" width={25} height={25} />
                                </span>
                                <a href="tel:+351213114400">+351 21 311 44 00</a>
                            </div>
                            <div className="emails flex flex-col md:flex-row ">
                                <div className="email inline-flex mt-3 pr-3">
                                    <span className="icon mr-3">
                                        <Image src="/img/svg/email.svg" alt="Email - CBRE" width={25} height={25} />
                                    </span>
                                    <a href="mailto:antonio.ribeiro@cbre.com">António Almeida Ribeiro</a>
                                </div>
                                <div className="email mt-3 inline-flex pr-3">
                                    <span className="icon mr-3">
                                        <Image src="/img/svg/email.svg" alt="Email - CBRE" width={25} height={25} />
                                    </span>
                                    <a href="mailto:antonio.ramos@cbre.com">António Ortigão Ramos</a>
                                </div>
                                <div className="email mt-3 inline-flex pr-3">
                                    <span className="icon mr-3">
                                        <Image src="/img/svg/email.svg" alt="Email - CBRE" width={25} height={25} />
                                    </span>
                                    <a href="margarida.moraesreis@cbre.com">Margarida Moraes Reis</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
