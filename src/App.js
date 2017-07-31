import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import Category, {GenerateCategories} from './components/Category';
import h from 'react-hyperscript';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: GenerateCategories(),
            newCategory: {},
            selected_category: {
                name: '',
                related_words: '',
                id: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
    }

    handleSubmit(event) {
        // const categories = this.state.categories;
        // const newCategories = Object.assign({}, this.state.categories.)
        let newCategories = Array.from(this.state.categories);
        newCategories.push(this.state.newCategory);
        this.setState({
            categories: newCategories,
            newCategory: {},
        });
    
        event.preventDefault();
    } 

    handleChange(value, key) {
        const newCategory = Object.assign({}, this.state.newCategory, {[key]: value});
        this.setState({newCategory: newCategory});
    }

    render() {
        return (
            h('section#available-categories', [
                h('h4', 'Available categories:'),
                h(CategoryList, {categories: this.state.categories}),
                h('section#category-form', [
                    h('h4', 'Add/Edit categories:'),
                    h(CategoryForm, {
                        onSubmit: this.handleSubmit,
                        onChange: this.handleChange,
                        selectedCategory: this.state.selected_category
                    })
                ])
            ])
        );
    }
}

export default App;
