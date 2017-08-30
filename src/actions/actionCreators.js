// add category
export function addCategory(name, keywords) {
    return {
        type: 'ADD_CATEGORY',
        name,
        keywords
    }
}


// edit category
export function editCategory(id) {
    return {
        type: 'EDIT_CATEGORY',
        id
    }
}


// delete category
export function deleteCategory(id) {
    return {
        type: 'DELETE_CATEGORY',
        id
    }
}
