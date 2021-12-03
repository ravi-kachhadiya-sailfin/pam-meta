import propTypes from 'prop-types';
import { Title, UL } from './style';

const ListWithTitle = (props) => {
  return (
    <>
      {props.title && <Title className={props.titleClassName}>{props.title}</Title>}
      <UL>
        {!!props.liList && props.liList.map((item) => {
          return (
            <li key={item} className={props.listClassName}>
              {item}
            </li>
          )
        })}
      </UL>
    </>
  );
};

ListWithTitle.propTypes = {
  title: propTypes.string,
  liList: propTypes.array,
};

export default ListWithTitle;
