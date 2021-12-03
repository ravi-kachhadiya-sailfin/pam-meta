import { CarouselItemWrapper, TestimonialWrapper } from './style';
import { getDeviceSize } from 'app/shared/Utils/index';

const CarouselItem = (props) => {
  let media = null;
  const deviceCode = getDeviceSize();
  let iItem = ['md', 'sm', 'xs'].indexOf(deviceCode) > -1 ? 1 : props.length;

  switch (iItem) {
    case 1:
      media = (
        <TestimonialWrapper className="testimonial">
          <div className="pic">
            <img src={props.data.img} alt={props.data.alt} />
          </div>
          {/* <TestimonialDescription> */}
          <p className="description">{props.data.description}</p>
          {/* </TestimonialDescription> */}
          <h3 className="title">{props.data.title}</h3>
        </TestimonialWrapper>
      );
      break;

    case 2:
      let item = [];
      props.allItems[props.index].Items.forEach((element) => {
        item.push(element);
      });

      media = (
        <CarouselItemWrapper>
          {item.map((i, index) => {
            return (
              <TestimonialWrapper className="testimonial testimonial-desktop" key={index}>
                <div className="pic">
                  <img src={i.img} alt={i.alt} />
                </div>
                {/* <TestimonialDescription> */}
                <p className="description">{i.description}</p>
                {/* </TestimonialDescription> */}
                <h3 className="title">{i.title}</h3>
              </TestimonialWrapper>
            );
          })}
        </CarouselItemWrapper>
      );
      break;
    default:
      return null
  }

  return media;
};

export default CarouselItem;
