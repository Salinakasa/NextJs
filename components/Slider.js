import Link from 'next/link';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const sliderlist = [
    {
        "id": 1,
        "title": "Manufacturers Of Impeccable Washroom Systems.",
        "imgurl": "https://cubispec.com.au/wp-content/uploads/2018/09/cubiloc-1200x760.jpg",
        "url": "/productlists"
    },
    {
        "id": 2,
        "title": "The upper-echelon of changeroom designs.",
        "imgurl": "https://cubispec.com.au/wp-content/uploads/2018/11/The-upper-echelon-1920x760.jpeg",
        "url": "/productlists"
    },
    {
        "id": 3,
        "title": "Astute Implementation Of Contemporary Technologies And Craftmanship.",
        "imgurl": "https://cubispec.com.au/wp-content/uploads/0-1-3-1536x760-1.jpg",
        "url": "/productlists"
    },
    {
        "id": 4,
        "title": "Specialists In Fabricating Exemplary Toilet Partitions.",
        "imgurl": "https://cubispec.com.au/wp-content/uploads/2018/09/cubiloc-1200x760.jpg",
        "url": "/productlists"
    }
]

const carousel = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings}>
                {sliderlist.map(slider => {
                    const url = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +'url(' + slider.imgurl +')';
                    return(
                        <div key={slider.id}>
                            <div className="main-slider text-white text-center flex items-center justify-center " style={{ backgroundImage: url }}>
                                <div className="max-w-xl">
                                    <p className="mb-4">{slider.id} / {sliderlist.length}</p>
                                    <h2 className="font-semibold text-5xl mb-4">{slider.title}</h2>
                                    <Link href={slider.url}>
                                        <a className="inline-block border border-white rounded-md px-10 py-4 hover:bg-white hover:text-black">Read more</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    })}
            </Slider>
        </>
        );
    }
    
    export default carousel;