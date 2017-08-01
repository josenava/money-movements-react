import React from 'react';
import h from 'react-hyperscript';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            h('p.category', {title: this.props.title}, [
                h('span', this.props.name),
                h('i.glyphicon.glyphicon-remove')
            ])
        )
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
    const randomWords = ['amazon', 'santander', 'mercadona', 'zara'];
    const numberOfWords = Math.floor(Math.random()*randomWords.length);

    return randomWords.slice(0, numberOfWords).join(';');
}

export default Category;
