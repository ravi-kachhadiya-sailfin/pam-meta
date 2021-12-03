import React from 'react';
import { CarouselWrapper, NextIconWrapper, PrevIconWrapper } from './style';

const NextIcon = () => {
  return <NextIconWrapper />;
};

const PrevIcon = () => {
  return <PrevIconWrapper />;
};

// const WITH_NAVIGATION = {
//   autoPlay: false,
//   cycleNavigation: true,
//   navButtonsAlwaysInvisible: false,
//   navButtonsAlwaysVisible: true,
//   NextIcon: <NextIcon />,
//   PrevIcon: <PrevIcon />,
//   navButtonsProps: {
//     style: {
//       backgroundColor: 'transparent',
//       borderRadius: 0,
//     },
//     className: 'custom-nav-btn',
//   },
//   navButtonsWrapperProps: {
//     style: {
//       top: '0',
//       height: '80%',
//     },
//     className: 'custom-nav-wrappper',
//   },
// };

// rest.data?.length > 1 ? false : true,
// rest.data?.length > 1 ? true : false,

const CustomCarousel = React.memo(({ indicatorIconButtonProps, children, withCustomButton, navButtonsAlwaysInvisible = false, navButtonsAlwaysVisible = true, ...rest }) => {
  // console.log("length: ", navButtonsAlwaysInvisible, navButtonsAlwaysVisible, rest.name)

  const WITH_NAVIGATION = {
    autoPlay: false,
    cycleNavigation: true,
    navButtonsAlwaysInvisible: navButtonsAlwaysInvisible,
    navButtonsAlwaysVisible: navButtonsAlwaysVisible,
    NextIcon: <NextIcon />,
    PrevIcon: <PrevIcon />,
    navButtonsProps: {
      style: {
        backgroundColor: 'transparent',
        borderRadius: 0,
      },
      className: 'custom-nav-btn',
    },
    navButtonsWrapperProps: {
      style: {
        top: '0',
        height: '80%',
      },
      className: 'custom-nav-wrappper',
    },
  };

  let DEFAULT_PROPS = {
    autoPlay: false,
    indicators: navButtonsAlwaysVisible,
    navButtonsAlwaysInvisible: false,
    indicatorIconButtonProps: {
      style: {
        border: '1px solid white',
        color: 'transparent',
        marginLeft: '18px',
        width: '12px',
        height: '12px',
        ...indicatorIconButtonProps?.style,
      },
    },
    activeIndicatorIconButtonProps: {
      style: {
        backgroundColor: 'orange',
      },
    },
  };

  if (withCustomButton) {
    DEFAULT_PROPS = {
      ...DEFAULT_PROPS,
      ...WITH_NAVIGATION,
    };
  }

  return (
    <CarouselWrapper
      // default props for design
      {...DEFAULT_PROPS}
      {...rest}
    >
      {children}
    </CarouselWrapper>
  );
});

export default CustomCarousel;
