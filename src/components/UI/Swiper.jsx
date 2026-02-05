import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function App() {
    const [clients, setClients] = useState([]);

    // Fetch clients from API
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch("http://localhost:1337/api/clients?populate=*");
                const data = await res.json();
                if (Array.isArray(data)) {
                    setClients(data);
                } else if (data?.data) {
                    setClients(data.data);
                }
            } catch (error) {
                console.error("Error fetching clients:", error);
            }
        };

        fetchClients();
    }, []);

    return (
        <Swiper
            spaceBetween={80}
            loop={true}
            allowTouchMove={false}
            slidesPerView={4}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            freeMode={true} 
            speed={6000}

            navigation={true}
            modules={[Autoplay]}
            className="mySwiper">
            {clients.length > 0
                ? clients.map((client) => {
                      const logoUrl = client.logo?.url;
                      return (
                          <SwiperSlide key={client.id}>
                              {logoUrl ? (
                                  <img src={`http://localhost:1337${logoUrl}`} alt={client.logo?.alternativeText || client.name || "Client Logo"} className="h-full w-full object-contain" />
                              ) : (
                                  <div className="h-full w-full flex items-center justify-center bg-gray-200">No Logo</div>
                              )}
                          </SwiperSlide>
                      );
                  })
                :
                  Array.from({ length: 9 }).map((_, i) => <SwiperSlide key={i}>Slide {i + 1}</SwiperSlide>)}
        </Swiper>
    );
}
