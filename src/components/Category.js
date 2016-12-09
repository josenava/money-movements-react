import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p className="category" title={this.props.title} >{this.props.name}</p>;
  }
}

export const GenerateCategories = function() {
  let categories = [];
  for (let i = 0; i < 10; i++) {
    categories[i] = {
      name:`Category ${i}`,
      related_words: getRandomWords()
    };
  }

  return categories;
}

function getRandomWords() {
  const random_words = ['amazon', 'santander', 'mercadona', 'zara'];
  let related_words = [];
  const number_of_words = Math.floor(Math.random()*random_words.length);

  return random_words.slice(0, number_of_words).join(';');
}

export default Category;
