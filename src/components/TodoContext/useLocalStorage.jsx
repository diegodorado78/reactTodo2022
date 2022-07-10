import React from 'react';

function useLocalStorage(itemName, initialValue) {
  //simulamos estados de carga y error
   const [loading,setLoading] =React.useState(true);//inicialmente true pero cuando ya carga pasa a false
   const [error,setError] =React.useState(false);//

   // uso el hook state para trata el estado
   const [item, setItem] = React.useState(initialValue);// paso un valor inicial por ejm un array vacio

   React.useEffect(()=>{

  setTimeout(() => {
  try{
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    setItem(parsedItem); //actualiza el estado con el valor del local storage
    setLoading(false)
  }catch(error){
   setError(error)

  }
  
  }, 500);

  });


const saveItem = (newItem) => {
  try {
    const stringifiedItem = JSON.stringify(newItem);
  localStorage.setItem(itemName, stringifiedItem);
  setItem(newItem);
  } catch (error) {
    setError(error)
  }
  
};

return {//cuando paso mas de dos elementos cambio[ ] por { }
  item,
  saveItem,
  loading,
  error
};
}
export {useLocalStorage};