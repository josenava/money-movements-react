import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import Category, {GenerateCategories} from './components/Category';

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

  // handleClick(category) {
  //   this.setState({selected_category: category});
  // }

  handleChange(value, key) {
    // debugger;
    // let formValue = {};
    // formValue[key] = value;
    const newCategory = Object.assign({}, this.state.newCategory, {[key]: value});
    this.setState({newCategory: newCategory});
  }

  render() {
    return (
      <section id="available-categories">
        <h4>Available categories: </h4>
        <CategoryList categories={this.state.categories} />

        <section id="category-form">
          <h4>Add/edit categories:</h4>
          <CategoryForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            selectedCategory={this.state.selected_category}
          />
        </section>
      </section>
    );
  }
}

export default App;
