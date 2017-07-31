import React from 'react';
import h from 'react-hyperscript';
import Category from './Category'

class CategoryList extends React.Component {
    render() {
        return (
            h('ul.list-inline',
                this.props.categories.map((category, id) => {
                    return h('li', {key: id}, 
                        h(Category, {name: category.name, title: category.related_words})
                    );
                })
            )
        )
    }
}

export default CategoryList;
