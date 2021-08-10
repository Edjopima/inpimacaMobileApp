const editAddProduct = async (type, element) => {
  const typeUrl = {
    edit: 'https://inpimaca-api.herokuapp.com/actualizarProducto',
    add:'https://inpimaca-api.herokuapp.com/agregarProducto'
  }
  const url = typeUrl[type]
  try {
    const res = await fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(element)
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
    return false
  }
}

const deleteElement = async (element) => {
  const url = 'https://inpimaca-api.herokuapp.com/eliminarProducto'
  try {
    const res = await fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(element)
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
    return false
  }
}

const api = {
  editAddProduct, 
  deleteElement,
}

export default api;