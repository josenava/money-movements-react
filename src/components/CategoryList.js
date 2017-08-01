import React from 'react';
import h from 'react-hyperscript';
import Category from './Category'

class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete(categoryName) {
        this.props.onClickDelete(categoryName);
    }

    render() {
        return (
            h('ul.list-inline',
                this.props.categories.map((category, id) => {
                    return h('li', {key: id},
                        h(Category, {
                            name: category.name,
                            title: category.related_words,
                            onClickDelete: this.handleClickDelete
                        })
                    );
                })
            )
        )
    }
}

export default CategoryList;
