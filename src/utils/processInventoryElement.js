import React from 'react';
import ActionButtons from '../components/inventory/ActionButtons';

const processInventoryElement = (element, dolarOptions, modalActions) => {
  console.log(element)
    return {
      ...element,
      priceUsd: element.price,
      priceBs: (element.price * dolarOptions[1].value).toFixed(2),
      actions:<ActionButtons modalActions={modalActions} item={element}/>
    }
}

export default processInventoryElement