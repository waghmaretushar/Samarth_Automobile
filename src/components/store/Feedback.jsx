import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {

  const FeedbackCard = [
    {
      name: "Vijay Itake",
      image: "/src/assets/feedback/vijay.jpg",
      desc: "Excellent service! My bike feels brand new after the servicing.",
      rating: 5
    },
    {
      name: "Sumit Bobade",
      image: "/src/assets/feedback/sumit.jpg",
      desc: "Quick, professional, and very friendly staff. Highly recommended!",
      rating: 4.8
    },
    {
      name: "Avinash Deshmukh",
      image: "/src/assets/feedback/avinash.jpg",
      desc: "Affordable prices and great attention to detail. Loved it!",
      rating: 4.7
    },
    {
      name: "Tushar Waghmare",
      image: "/src/assets/feedback/tushar.jpg",
      desc: "Got my scooter repaired perfectly on time. Very reliable team!",
      rating: 4.9
    },
    {
      name: "Shubham Athvale",
      image: "https://images.unsplash.com/photo-1741682044306-68905693a8e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      desc: "Professional mechanics and smooth process. Worth every penny.",
      rating: 4.8
    },
    {
      name: "Saurav Sonone",
      image: "https://images.unsplash.com/photo-1761872936306-cede97eb846d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      desc: "Excellent customer support and quick delivery. Totally satisfied!",
      rating: 5
    }

  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };



  return (
    <div className='p-5'>
      <div className=' flex justify-center mt-5 items-center flex-col'>
        <div className='mb-5'>
          <h2>FEEDBACK</h2>
        </div>
        <div className='lg:h-[34vw] h-[120vw] w-full bg-zinc-700 rounded-4xl mb-20 cursor-pointer p-10'>
          <Slider {...settings}>
            {FeedbackCard.map((item, idx) => (
              <div key={idx} className='h-96 w-full mb-10 text-white rounded-4xl'>
                <div className='h-full flex items-center justify-center gap-4 p-10 flex-col'>
                  <div className="bg-red-200 rounded-full overflow-hidden border-2 border-white h-40 w-40">
                    <img src={item.image} alt="profile image" className="h-full w-full object-cover" />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <h4>Rating : {item.rating} - ✰✰✰✰✰</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Feedback