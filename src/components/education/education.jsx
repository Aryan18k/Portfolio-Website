import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      name: 'Masters in Computer Science',
      college: 'University of Southern California, Viterbi School of Engineering',
      year: '2022-2024',
      description: 'Currently in my first semester of Masters.',
      
    },
    {
      id: 2,
      name: 'Bachelors in Computer Science and Engineering',
      college: 'Jawaharlal Nehru Technological University, Hyderabad',
      year:'2018-2022',
      description: 'Graduated in First Class with Distinction with a GPA of 9.3/10'
    },
  ];
  return (
    <section id="education">
      <h2>Academic Qualifications</h2>
      <Swiper 
        className="education__container"
        modules={[Pagination,Navigation,Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        >
        {education.map((test) => (
          <SwiperSlide className="education" key={test.id}>
          <h5 className='name'>{test.name}</h5>
          <h5 className='college'>{test.college}</h5>
          <small>{test.year}</small>
          <h5>{test.description}</h5>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Education

