function deleteCategory(state, id) {
  console.log(`surprise dude ${id}`);
}


function categories(state = [], action) {
  console.log(state, action);

  switch (action.type) {
    case 'EDIT_CATEGORY':
      console.log('canduterio');
      break;
    case 'ADD_CATEGORY':
    case 'DELETE_CATEGORY':
      deleteCategory(state, action.id);
      break;
    default:
  }

  return state;
}

export default categories;
