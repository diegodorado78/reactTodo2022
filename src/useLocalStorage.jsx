import React, { useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincItem, loading, error, item } = state; //desectructuro las vars del objeto state compuesto

  //ACTION CREATORS, los llamamos cada vez que querramos actualizar los datos de nuestra app
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });

  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });

  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
        //dispatch({ type: actionTypes.error, payload: error }); //dispara el estado error y envia el error
        //setError(error);
      }
    }, 1000);
  }, [sincItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      //setItem(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    //queda asi porque debo mantener la estructura de lo que sale y entra
    //al llamarlo debemos poner la app en carga y cambiamos sinc para que el effect se vuelva a ejecutar
    onSincronize();
  };

  return {
    //cuando paso mas de dos elementos cambio[ ] por { }
    item,
    saveItem,
    loading,
    error,
    sincronizeItem, //exporto funcion()
  };
}
const initialState = ({ initialValue }) => ({
  //los parentesis son para return implicito
  sincItem: true,
  error: false,
  loading: true,
  item: initialValue,
});
const actionTypes = {
  //objeto donde viven todos los action types y asi evitar el error de llamarlos mal dentro o fuera del reducer object
  error: "ERROR", //nombre clave dentro del reducer object
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};
const reducerObject = (state, payload) => ({
  //devuelve un objeto mediante un return implicito
  //definimos que pasa cuando se llama a cada uno de los estados (action types)
  [actionTypes.error]: {
    //nombre del nuevo estado del reducer
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    //nombre del nuevo estado del reducer
    ...state,
    error: false,
    loading: false,
    sincItem: true,
    item: payload,
  },
  [actionTypes.sincronize]: {
    //nombre del nuevo estado del reducer
    ...state,
    loading: true,
    sincItem: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
});
const reducer = (state, action) => {
  //recibe el estado y un payload y es una funcion que devuelve un objeto
  //que se llame igual que el action.type
  return reducerObject(state, action.payload)[action.type] || state; //devuelve el objeto que match o todo el estado
};
export { useLocalStorage };
