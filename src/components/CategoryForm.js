import React from 'react';
import h from 'react-hyperscript';
import uuid from 'uuid4';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.selectedCategory
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({input: nextProps.selectedCategory});
    }

    handleChange(e) {
        let category = this.state.input;
        if (category.id === '') {
            category.id = uuid();
        }

        category[e.target.name] = e.target.value;

        this.setState({selectedCategory: category});

        this.props.onChange(category);
    }

    render() {
        return (
            h('form', {onSubmit: (e) => this.props.onSubmit(e) }, [
                h('div.form-group', [
                    h('label', {'htmlFor': 'category-name'}, 'Name:'),
                    h('input#category-name.form-control',
                        {
                            type: 'text',
                            placeholder: 'Category name',
                            onChange: this.handleChange,
                            required: true,
                            value: this.state.input.name,
                            name: 'name'
                        }
                    )
                ]),
                h('div.form-group', [
                    h('label', {'htmlFor': 'related-words'}, 'Related words:'),
                    h('input#related-words.form-control', {type: 'textarea',
                        placeholder: 'Related words separated by ;',
                        onChange: this.handleChange,
                        required: true,
                        value: this.state.input.relatedWords,
                        name: 'relatedWords'
                    })
                ]),
                h('input', {'className': 'btn btn-default', type: 'submit', value: 'Submit'})
            ])
        );
    }
}

export default CategoryForm;
