import React from 'react';
import h from 'react-hyperscript';
import Category from './Category'

class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
    }

    handleClickDelete(categoryId) {
        this.props.onClickDelete(categoryId);
    }

    handleClickEdit(categoryId) {
        this.props.onClickEdit(categoryId);
    }

    render() {
        return (
            h('ul.list-inline',
                this.props.categories.map((category) => {
                    return h('li', {key: category.id},
                        h(Category, {
                            id: category.id,
                            name: category.name,
                            title: category.relatedWords,
                            onClickDelete: this.handleClickDelete,
                            onClickEdit: this.handleClickEdit
                        })
                    );
                })
            )
        )
    }
}

export default CategoryList;
