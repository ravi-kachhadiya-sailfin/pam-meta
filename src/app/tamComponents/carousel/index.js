import { CarouselWrapper, NextIconWrapper, PrevIconWrapper } from './style';

const NextIcon = () => {
  return <NextIconWrapper />;
};

const PrevIcon = () => {
  return <PrevIconWrapper />;
};

const CustomCarousel = ({ indicatorIconButtonProps, children, withCustomButton, navButtonsAlwaysInvisible = true, navButtonsAlwaysVisible = true, ...rest }) => {
  const WITH_NAVIGATION = {
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
    indicators: navButtonsAlwaysVisible,
    navButtonsAlwaysInvisible: true,
    indicatorIconButtonProps: {
      style: {
        border: '1px solid white',
        color: 'transparent',
        marginLeft: '18px',
        width: '12px',
        height: '12px',
        textAlign: 'left',
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
};

export default CustomCarousel;
