import React, { createContext, useContext, useReducer } from "react";

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    // img: action.img,
                    name: action.name,
                    qty: action.qty,
                    size: action.size,
                    price: action.price,
                },
            ];
        //  case "REMOVE" :
        //      let newArr = [...state]
        //      newArr.splice(action.index , 1)
        //      return newArr;
         case "REMOVE":
         // Use filter to remove the item at the specified index
            return state.filter((_, index) => index !== action.index);
        case "UPDATE":
            // let arr = [...state]
            //  arr.find((food , index)=>{
            //     if(food.id === action.id)
            //         {
            //             console.log(food.qty , parseInt(action.qty), action.price + food.price);
            //             arr[index] = {...food , qty: parseInt(action.qty) + food.qty , price: action.price + food.price };
            //         }
            //         return arr
            //   })
            //  return arr
              // Use map to update the item with the specified id
            return state.map((item) =>
                item.id === action.id
                    ? { ...item, qty: parseInt(action.qty) + item.qty, price: action.price + item.price }
                    : item
            );
             case "DROP":
                //Return an Empty array to drop
               let empArray = []
               return empArray
            default:
                console.log("Error in reducer");
            return state; // Make sure to return the state if no action type matches
    }
};

export const CartProvider = ({ children }) => { // Corrected 'Children' to 'children'
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
