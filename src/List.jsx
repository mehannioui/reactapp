import propTypes from 'prop-types';
import { ReactpropTypes } from 'react';

function List(props) {
  const category = props.category;
  const itemList = props.item;
  itemList.sort((a, b) => a.name.localeCompare(b.name));

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className='list-category'>{category}</h3>
      <ul className='list-items'>{listItems}</ul>
    </>
  );
}

List.propTypes = {
  category: propTypes.string,
  item: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
};

List.defaultProps = {
  category: 'Category Name',
  item: [],
};

export default List;
