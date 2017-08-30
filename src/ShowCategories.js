import { Component } from 'react';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import {GenerateCategories} from './components/Category';
import h from 'react-hyperscript';

class ShowCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: GenerateCategories(),
            newCategory: {},
            selectedCategory: {
                name: '',
                relatedWords: '',
                id: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
    }

    componentDidMount() {
        this.fetchCategoriesData('http://localhost:3005/api/categories');
    }

    parseCategoriesData(categories) {
        return categories.map((category) => {
            return {
                id: category.id,
                name: category.attributes.name,
                relatedWords: category.attributes.keywords.join(';')
            }
        })
    }

    fetchCategoriesData(categoriesEndPoint) {
        fetch(categoriesEndPoint, {method: 'get'})
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({categories: this.parseCategoriesData(data.data)});
            })
    }

    handleSubmit(event) {
        let currentCategories = Object.assign([], this.state.categories);
        const newCategory = Object.assign({}, this.state.newCategory);

        const index = this.findIndexById(currentCategories, newCategory.id);

        if (-1 !== index) {
            currentCategories[index] = newCategory;
        } else {
            currentCategories.push(newCategory);
        }

        this.setState({
            categories: currentCategories,
            newCategory: {},
            selectedCategory: {
                name: '',
                relatedWords: '',
                id: ''
            }
        });

        event.preventDefault();
    }

    findIndexById(currentCategories, newCategoryId) {
        return currentCategories.findIndex((category) => category.id === newCategoryId);

    }
    handleChange(category) {
        const newCategory = Object.assign({}, this.state.newCategory, category);
        this.setState({newCategory});
    }

    handleClickDelete(categoryId) {
        const currentCategories = Object.assign([], this.state.categories);
        const remainingCategories = currentCategories.filter(
            (category) => categoryId !== category.id
        );

        this.setState({
            categories: remainingCategories,
            selectedCategory: {
                name: '',
                relatedWords: '',
                id: ''
            }
        });
    }

    handleClickEdit(categoryId) {
        const currentCategories = Object.assign([], this.state.categories);
        const selectedCategory = currentCategories.filter((category) => categoryId === category.id)[0];

        this.setState({selectedCategory});
    }

    render() {
        return (
            h('section#available-categories', [
                h('h4', 'Available categories:'),
                h(CategoryList, {
                    categories: this.state.categories,
                    onClickDelete: this.handleClickDelete,
                    onClickEdit: this.handleClickEdit,
                }),
                h('section#category-form', [
                    h('h4', 'Add/Edit categories:'),
                    h(CategoryForm, {
                        onSubmit: this.handleSubmit,
                        onChange: this.handleChange,
                        selectedCategory: this.state.selectedCategory
                    })
                ])
            ])
        );
    }
}

export default ShowCategories;
