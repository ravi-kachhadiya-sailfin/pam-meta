export const getGenderValue = (number) => {
  // MALE = 1,
  //   FEMALE = 2,
  //   TRANSGENDER = 3,
  //   NON_BINARY = 4,
  //   PREFER_NOT_TO_SAY = 5

  switch (number) {
    case 1:
      return "Male";
    case 2:
      return "Female";
    case 3:
      return "Transgender";
    case 4:
      return "Non Binary";
    default:
      return "Prefer Not To Say";
  }
};

export const getRaceValue = (number) => {
  // { value: "1", text: "Spanish" },
  // { value: "2", text: "Hispanic" },
  // { value: "3", text: "Latino" },
  // { value: "4", text: "White" },
  // { value: "5", text: "Asian" },
  // { value: "6", text: "Black or African American" },
  // { value: "7", text: "American Indian or Alaska Native" },
  // { value: "8", text: "Latino" },
  // { value: "9", text: "Native Hawaiian or Pacific Islander" },
  // { value: "9", text: "None of these" },

  switch (number) {
    case 1:
      return "Spanish";
    case 2:
      return "Hispanic";
    case 3:
      return "Latino";
    case 4:
      return "White";
    case 5:
      return "Asian";
    case 6:
      return "Black or African American";
    case 7:
      return "American Indian or Alaska Native";
    case 8:
      return "Native Hawaiian or Pacific Islander";
    default:
      return "None of these";
  }
};

export const convertGenderToValue = (str) => {
  switch (str) {
    case "male":
      return 1;
    case "female":
      return 2;
    case "transgender":
      return 3;
    case "non binary":
      return 4;
    default:
      return 5;
  }
};
