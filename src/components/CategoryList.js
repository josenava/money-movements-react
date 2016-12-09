import React from 'react';
import Category from './Category'

class CategoryList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event, category, id) {
  //   category.id = id;
  //   this.props.onClick(category);
  // }

  render() {
    const categories = this.props.categories.map((category, id) => {
      return <li key={id}> <Category name={category.name} title={category.related_words} /></li>
    });

    return (
      <ul className="list-inline">
        {categories}
      </ul>
    )
  }
}


export default CategoryList;
