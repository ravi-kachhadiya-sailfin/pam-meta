import { CarouselItemWrapper, TestimonialWrapper } from './style';
import { getDeviceSize } from 'app/shared/Utils/index';

const CarouselItem = (props) => {
  let media = null;
  let deviceCode = getDeviceSize();
  let iItem = 1;
  if (props.desktopMode) {
    iItem = ['md', 'sm', 'xs'].indexOf(deviceCode) > -1 ? 1 : props.length;
  } else {
    iItem = ['sm', 'xs'].indexOf(deviceCode) > -1 ? 1 : props.length;
  }
  const CarouselComponent = props.component;

  console.log("iItem", iItem);
  switch (iItem) {
    case 1:
      media = (
        <TestimonialWrapper className="testimonial tools_slider search-tools-slider" >
          {props.componentName === "activity"
            ? <CarouselComponent activity={props.data} />
            : <CarouselComponent cardData={props.data} />
          }
        </TestimonialWrapper>
      );
      break;

    case 2:
      let items = [];
      props.allItems[props.index].Items?.forEach((element) => {
        items.push(element);
      });

      media = (
        <CarouselItemWrapper className="slider_wrapper">
          {items.map((item, index) => {
            return (
              <TestimonialWrapper className={`${props.itemLength === 3 && "desk_tool_slider"} testimonial tools_slider`} key={index}>
                {props.componentName === "activity"
                  ? <CarouselComponent activity={item} />
                  : <CarouselComponent cardData={item} />
                }
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
