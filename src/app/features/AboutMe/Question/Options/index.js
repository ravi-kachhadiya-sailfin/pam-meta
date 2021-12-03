import { RadioGroup } from "@material-ui/core";
import RadioWithColor from "app/tamComponents/radio-w";
import MultiSelectButton from "app/tamComponents/multi-select-btn";

import CustomSelect from "app/tamComponents/select";
import { CONTROLS } from 'app/features/AboutMe';

const Options = (props) => {
  const getControl = () => {
    switch (props.type) {
      case CONTROLS.radio:
        return (
          <>
            <RadioGroup
              name={props.id}
              row
              onChange={(e) => {
                props.onChange({
                  id: props.id,
                  answer: e.target.value,
                  type: props.type,
                });
              }}
              value={props.selectedAnswer}
            >
              {props.options.map((item) => {
                return (
                  <RadioWithColor
                    value={item.value}
                    color="#0099ba"
                    label={<span className="c-db">{item.text}</span>}
                    key={item.value}
                  />
                );
              })}
            </RadioGroup>
          </>
        );

      case CONTROLS.select:
        return (
          <div className="healthcare-select">
            <CustomSelect
              id={props.id}
              options={props.options}
              onChange={(e) =>
                props.onChange({
                  id: props.id,
                  answer: e.target.value,
                  type: props.type,
                })
              }
              value={props.selectedAnswer}
              placeholder="Select"
            ></CustomSelect>
          </div>
        )

      case CONTROLS.multiSelect:
        return (
          <>
            {props.options.map((item) => {
              return (
                <MultiSelectButton
                  key={item.text}
                  onChange={() =>
                    props.onChange({
                      id: props.id,
                      answer: item.value,
                      type: props.type,
                    })
                  }
                  singleSelect={false}
                  text={item.text}
                  value={item.value}
                  selectedAnswer={props.selectedAnswer}
                ></MultiSelectButton>
              );
            })}
          </>
        );

      case CONTROLS.singleSelect:
        return (
          <>
            {props.options.map((item) => {
              return (
                <MultiSelectButton
                  key={item.text}
                  onChange={() =>
                    props.onChange({
                      id: props.id,
                      answer: item.value,
                      type: props.type,
                    })
                  }
                  singleSelect={true}
                  text={item.text}
                  value={item.value}
                  selectedAnswer={props.selectedAnswer}
                ></MultiSelectButton>
              );
            })}
          </>
        );

      default:
        return null
    }
  }

  return getControl();
};

export default Options;
