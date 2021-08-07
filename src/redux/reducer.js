import processInventoryElement from "../utils/processInventoryElement"

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_INVENTORY':
      return {...state, inventory:action.payload}
    case 'ADD_ELEMENT':
      let newElement = processInventoryElement(action.payload.response, state.dolarOptions, action.payload.modalActions)
      const newInventory = state.inventory
      newInventory.push(element)
      return {...state, inventory: newInventory }
    case 'EDIT_ELEMENT':
      let element = processInventoryElement(action.payload.response, state.dolarOptions, action.payload.modalActions)
      const i = state.inventory.findIndex((e)=>e.id===action.payload.response.id);
      const updatedInventory = state.inventory
      newInventory.splice(i,1,element);
      return {...state, inventory: updatedInventory }
    case 'SET_DOLAR_OPTIONS':
      return {...state, dolarOptions: action.payload}
    default:
      return state
  }
}

export default reducer