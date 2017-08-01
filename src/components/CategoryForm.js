import React from 'react';
import h from 'react-hyperscript';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleWordsChange = this.handleWordsChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onChange(e.target.value, 'name');
    }

    handleWordsChange(e) {
        this.props.onChange(e.target.value, 'related_words');
    }

    render() {
        return (
            h('form', {onSubmit: (e) => this.props.onSubmit(e) }, [
                h('div.form-group', [
                    h('label', {'htmlFor': 'category-name'}, 'Name:'),
                    h('input#category-name.form-control', {type: 'text',
                        placeholder: 'Category name',
                        onChange: this.handleNameChange,
                        required: true
                    }) 
                ]),
                h('div.form-group', [
                    h('label', {'htmlFor': 'related-words'}, 'Related words:'),
                    h('input#related-words.form-control', {type: 'textarea',
                        placeholder: 'Related words separated by ;',
                        onChange: this.handleWordsChange,
                        required: true
                    }) 
                ]),
                h('input', {'className': 'btn btn-default', type: 'submit', value: 'Submit'})
            ])   
        );       
    }
}

export default CategoryForm;
