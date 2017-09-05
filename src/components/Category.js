import React from 'react';
import h from 'react-hyperscript';
import uuid from 'uuid4';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickDelete(event) {
    this.props.onClickDelete(this.props.id);
  }

  handleClickEdit(event) {
    this.props.onClickEdit(this.props.id);
  }

  render() {
    return (
      h('p.category', { title: this.props.title }, [
        h('span', { onClick: e => this.handleClickEdit(e) }, this.props.name),
        h('i.glyphicon.glyphicon-remove',
          { onClick: e => this.handleClickDelete(e) },
        ),
      ])
    );
  }
}

function getRandomWords() {
  const randomWords = ['amazon', 'santander', 'mercadona', 'zara'];
  const numberOfWords = Math.floor(Math.random() * randomWords.length);

  return randomWords.slice(0, numberOfWords).join(';');
}

export function GenerateCategories() {
  const categories = [];
  for (let i = 0; i < 10; i += 1) {
    categories[i] = {
      id: uuid(),
      name: `Category ${i}`,
      relatedWords: getRandomWords(),
    };
  }

  return categories;
};



export default Category;
