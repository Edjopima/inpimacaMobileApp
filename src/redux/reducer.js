import processInventoryElement from "../utils/processInventoryElement"

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOGGED_USER':
      return {...state, loggedUser: action.payload}

    case 'SET_INVENTORY':
      return {...state, inventory:action.payload}

    case 'ADD_ELEMENT':
      let newElement = processInventoryElement(action.payload.response, state.dolarOptions, action.payload.modalActions)
      const newInventory = [...state.inventory]
      newInventory.push(newElement)
      return {...state, inventory: newInventory }

    case 'EDIT_ELEMENT':
      let element = processInventoryElement(action.payload.response, state.dolarOptions, action.payload.modalActions)
      const i = state.inventory.findIndex((e)=>e.id===action.payload.response.id);
      const updatedInventory = [...state.inventory]
      updatedInventory.splice(i,1,element);
      return {...state, inventory: updatedInventory }

    case 'DELETE_ELEMENT':
      const modifiedInventory = [...state.inventory]
      const index = state.inventory.findIndex((e)=>e.id===action.payload.id);
      modifiedInventory.splice(index,1)
      return {...state, inventory: modifiedInventory}
      
    case 'SET_DOLAR_OPTIONS':
      return {...state, dolarOptions: action.payload}

    case 'ADD_TO_CART':
      const  item = state.shoppingCart.find((e)=>e.id===action.payload.id);
      if (item) {
        const newItem = {
          ...item,
          quantity:item.quantity + action.payload.quantity
        }
        const shoppingCart = [...state.shoppingCart]
        shoppingCart.splice(shoppingCart.indexOf(item),1,newItem)
        return {...state, shoppingCart}
      }
      return {...state, shoppingCart:[...state.shoppingCart, action.payload]}
    
    case 'REMOVE_FROM_CART':
      const cartItemIndex = state.shoppingCart.findIndex((e)=>e.id===action.payload.id);
      const newShoppingCart = [...state.shoppingCart]
      newShoppingCart.splice(cartItemIndex,1);
      return {...state, shoppingCart: newShoppingCart}

    case 'CLEAR_SHOPPING_CART':
      return {...state, shoppingCart:[]}

    default:
      return state
  }
}

export default reducer