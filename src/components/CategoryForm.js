import React from 'react';
import h from 'react-hyperscript';

class CategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleWordsChange = this.handleWordsChange.bind(this);
        // this.state = {
        //   name: '',
        //   related_words: '',
        // }
    }

    handleNameChange(e) {
        // this.setState({name: e.target.value});
        this.props.onChange(e.target.value, 'name');
    }

    handleWordsChange(e) {
        // this.setState({related_words: e.target.value});
        this.props.onChange(e.target.value, 'related_words');
    }

    render() {
      // const name = ("" !== this.state.name)
      //   ? this.state.name
      //   : this.props.selectedCategory.name;
      //
      // const relatedWords = ("" !== this.state.related_words)
      //   ? this.state.related_words
      //   : this.props.selectedCategory.related_words;

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
                 
//        return  (
//            <f orm action="" onSubmit={(e) => this.props.onSubmit(e)}>
//              ]  <div className="form-group">
//                    <label htmlFor="category-name">Name:</label>
//                    <input type="text" id="category-name" className="form-control"
//                        placeholder="Category Name"
//                    onChange={this.handleNameChange} required />
//                </div>
//                <div className="form-group">
//                    <label htmlFor="related-words">Related words:</label>
//                    <input type="textarea" className="form-control" id="related-words"
//                    placeholder="Related words separated by ;"
//                    onChange={this.handleWordsChange} required />
//                </div>
//                <input type="submit" className="btn btn-default" value="Submit" />
//            </form>
//        );
    }
}

export default CategoryForm;
