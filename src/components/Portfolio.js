

import React, {  useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigation, Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import axios from 'axios';
import GridCard from "./Card";

export default function Slides () {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
/*
  useEffect(() => {
      axios.get('http://localhost:8000/api/companies/')
          .then(response => {
              setCompanies(response.data);
              setIsLoading(false);
          })
          .catch(error => {
              setError(error.message);
              setIsLoading(false);
          });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
*/
    const mockApiCall = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Company1', totalShare: 1000, totalReturn: 10000 },
          { id: 2, name: 'Company2', totalShare: 2000, totalReturn: 20000 },
          { id: 3, name: 'Company3', totalShare: 3000, totalReturn: 30000 },
            { id: 4, name: 'Company4', totalShare: 4000, totalReturn: 40000 },
            { id: 5, name: 'Company5', totalShare: 5000, totalReturn: 50000 },
            { id: 6, name: 'Company6', totalShare: 6000, totalReturn: 60000 },
          // Add more companies as needed
        ]);
        // reject(new Error('Failed to fetch')); // Uncomment to test error handling
      }, 2000);
    });

    mockApiCall
      .then(companies => {
        setCompanies(companies);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });

  if (isLoading) {
    return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {companies.map(company => (
        <SwiperSlide key={company.id}>
          <GridCard company={company} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
