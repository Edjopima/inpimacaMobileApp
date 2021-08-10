import processInventoryElement from "../utils/processInventoryElement"

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOGGED_USER':
      return {...state, loggedUser: action.payload}

    case 'SET_INVENTORY':
      return {...state, inventory:action.payload}

    case 'ADD_ELEMENT':
      let newElement = processInventoryElement(action.payload.response, state.dolarOptions, action.payload.modalActions)
      const newInventory = state.inventory
      newInventory.push(newElement)
      return {...state, inventory: newInventory }

    case 'EDIT_ELEMENT':
      let element = processInventoryElement(action.payload.response, state.dolarOptions, action.payload.modalActions)
      const i = state.inventory.findIndex((e)=>e.id===action.payload.response.id);
      const updatedInventory = state.inventory
      updatedInventory.splice(i,1,element);
      return {...state, inventory: updatedInventory }

    case 'DELETE_ELEMENT':
      const modifiedInventory = state.inventory
      const index = state.inventory.findIndex((e)=>e.id===action.payload.id);
      modifiedInventory.splice(index,1)
      return {...state, inventory: modifiedInventory}
      
    case 'SET_DOLAR_OPTIONS':
      return {...state, dolarOptions: action.payload}
    default:
      return state
  }
}

export default reducer