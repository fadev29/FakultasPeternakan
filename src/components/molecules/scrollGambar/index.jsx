import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination } from "swiper/modules";

export default function ImageSlider() {
  const images = [
    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/07/WhatsApp-Image-2024-07-10-at-11.18.57-5.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/07/WhatsApp-Image-2024-06-30-at-08.37.31.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/WhatsApp-Image-2023-03-30-at-12.57.51.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/07/WhatsApp-Image-2024-06-30-at-08.36.00-scaled.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/WhatsApp-Image-2023-03-30-at-12.59.05.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/WhatsApp-Image-2023-03-30-at-13.03.37-1.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/07/WhatsApp-Image-2024-07-10-at-11.18.57-2.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/WhatsApp-Image-2023-03-30-at-13.03.37-2.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/WhatsApp-Image-2023-03-30-at-13.03.37.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2024/07/WhatsApp-Image-2024-07-10-at-11.18.57.jpeg",

    "https://ppt.fapet.ugm.ac.id/wp-content/uploads/sites/1909/2023/03/WhatsApp-Image-2023-03-30-at-13.03.38-1.jpeg",
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="lg:w-[1000px] lg:h-[500px] w-[300px] h[100px] text-white  shadow rounded-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
