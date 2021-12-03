import { CustomButton } from './style';

const Button = ({ color, children, ...rest }) => {
  return (
    <CustomButton tamColor={color} {...rest}>
      {children}
    </CustomButton>
  );
};

export default Button;
