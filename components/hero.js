import Image from 'next/image'

function Hero() {

    return (
        <div className="relative">
            <div className="h-[50vh] min-h-full bg-[url('/img/banner_hero.jpg')] hero-image bg-center bg-cover flex brightness-75">
            </div>
            <img className="absolute w-28 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-40 md:top-1/4 md:translate-y--2/4 md:left-44" src="/img/98logo.png" alt="Logo edificio 98" />
        </div>
    )
}

export default Hero
