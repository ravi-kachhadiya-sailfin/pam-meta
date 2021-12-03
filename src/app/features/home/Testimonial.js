import React, { useState, useEffect } from 'react';
//import "app/shared/assets/css/testimonialSlider.css";
import FemaleDoctor from 'app/shared/assets/images/female_doctor_vector.svg';
import MaleNurse from 'app/shared/assets/images/male_nurse_vector.svg';
import Caraousel from 'app/tamComponents/carousel';
import CarouselItem from 'app/tamComponents/carousel/CarouselItem';
import { convertTestimonialArray, getDeviceSize } from 'app/shared/Utils/index';
import { throttle } from 'lodash';

const items = [
  {
    img: MaleNurse,
    alt: 'Anonymous ICU nurse',
    description: "PAM is fantastic. It helps me to be less reactive when I walk into my patients’ rooms. I can be more compassionate towards myself, my patients and their families.",
    title: "Anonymous ICU nurse",
  },
  {
    img: FemaleDoctor,
    alt: 'Anonymous ER Doctor',
    description: "I really like that PAM takes me right to questions that help me find the right tools. And I love that there are quick tools for when I don’t have much time, but there are also specialized tools that are more catered to the individual. PAM will help a lot of people.",
    title: 'Anonymous ER Doctor',
  },
];

const Testimonial = (props) => {
  const [deviceCode, setDeviceCode] = useState(getDeviceSize());

  const handleResize = throttle(() => {
    updateWidth();
  }, 500);

  const updateWidth = () => {
    const deviceSizeCode = getDeviceSize();
    if (deviceSizeCode !== deviceCode) {
      setDeviceCode(deviceSizeCode);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const testiMonialArr = convertTestimonialArray(items);
  return (
    <section className="content  testimonials_wrapper" >
      <div className="container">
        <h1 className="testimonials_title">PEOPLE LIKE YOU</h1>

        <div className="row">
          <div className="col-md-12 sliderContainer remove-slider-space">
            <Caraousel
              indicatorIconButtonProps={{
                style: {
                  border: '1px solid #a9bdc5',
                },
              }}
              navButtonsAlwaysInvisible={!(testiMonialArr?.length > 1)}
              navButtonsAlwaysVisible={testiMonialArr?.length > 1}
              withCustomButton={true}
            >
              {testiMonialArr.map((item, index) => {
                return (
                  <CarouselItem interval={6000} allItems={testiMonialArr} data={item.Items[0]} length={2} index={index} key={index} />
                );
              })}
            </Caraousel>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
