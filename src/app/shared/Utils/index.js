import PlaceHolderImage from "app/shared/assets/images/placeholder_logo.png";
import logo from 'app/shared/assets/images/logos/logo1.svg';

export const defaultMetaData = () => {
  const metaData = {
    title: "Pause A Moment",
    description: "The COVID-19 pandemic has taken a toll. Pause a moment to focus on your well-being.",
    image: logo,
    url: window.location.href
  }

  return metaData;
}

export const getWATrakingID = () => {
  if (window.location.host === "pam-dev.med.stanford.edu") {
    return process.env.REACT_APP_ANALYTICS_DEV_TRAKING_ID;
  } else if (window.location.host === "pam-uat.med.stanford.edu") {
    return process.env.REACT_APP_ANALYTICS_UAT_TRAKING_ID;
  }

  return false;
}

export const convertToStringItems = (item) => {
  if (typeof item == 'object') {
    Object.keys(item).map((i) => {
      if (item[i] != null && item[i] !== undefined && typeof item[i] != 'object') item[i] = item[i].toString();
      return 0;
    });
  }

  return item;
};

export const imagePlaceholder = (e) => {
  e.target.src = PlaceHolderImage;
}

export const getDeviceSize = () => {
  let breakpoints = {
    '(min-width: 1200px)': 'xl',
    '(min-width: 992px) and (max-width: 1199.98px)': 'lg',
    '(min-width: 768px) and (max-width: 991.98px)': 'md',
    '(min-width: 576px) and (max-width: 767.98px)': 'sm',
    '(max-width: 575.98px)': 'xs',
  };

  for (let media in breakpoints) {
    if (window.matchMedia(media).matches) {
      return breakpoints[media];
    }
  }

  return null;
};

export const handleOpen = () => {
  setTimeout(() => {
    document.body.style.removeProperty('overflow');
    var temp = document.body.style.cssText;
    temp = temp + "overflow:hidden !important;";
    document.body.style.cssText = temp;
  }, 100);
  // console.log("open body css:", document.body.style.cssText)
}

export const handleClose = () => {
  setTimeout(() => {
    document.body.style.removeProperty('overflow');
    var temp = document.body.style.cssText;
    temp = temp + "overflow:auto !important;";
    document.body.style.cssText = temp;
  }, 100);
}

export function BrowserDetect() {

  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  return browserName;
}

// console.log("close body css:", document.body.style.cssText)

export const convertTestimonialArray = (items, tabletMode = true, size = 2) => {

  if (items === null) {
    return null;
  }

  const deviceCode = getDeviceSize();
  let concurrentTestimonialSize = 1;

  if (tabletMode) {
    concurrentTestimonialSize = ['md', 'sm', 'xs'].indexOf(deviceCode) > -1 ? 1 : size
  }
  else {
    concurrentTestimonialSize = ['sm', 'xs'].indexOf(deviceCode) > -1 ? 1 : size
  }

  const finalTestimonialArr = [];

  for (let i = 0; i < items.length; i++) {
    let newIndex = i + (concurrentTestimonialSize - 1) >= items.length ? null : i + (concurrentTestimonialSize - 1);
    const tmpTestimonialContainer = [];

    if (newIndex !== null) {
      for (let innerI = i; innerI <= newIndex; innerI++) {
        tmpTestimonialContainer.push(items[innerI]);
      }
      i = newIndex;
    } else {
      for (let innerI = i; innerI < items.length; innerI++) {
        tmpTestimonialContainer.push(items[innerI]);
        i = innerI;
      }
    }
    finalTestimonialArr.push({ Items: tmpTestimonialContainer });
  }

  return finalTestimonialArr;
};