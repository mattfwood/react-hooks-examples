import React, { useReducer } from 'react';
import { Input } from 'semantic-ui-react';

const foodReducer = (state, action) => {
  switch (action.type) {
    case 'FOOD':
      return { ...state, favoriteFood: action.payload };
    case 'DRINK':
      return { ...state, favoriteDrink: action.payload };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(foodReducer, {
    favoriteFood: 'pizza',
    favoriteDrink: 'seltzer',
  });

  return (
    <div>
      <Input
        value={state.favoriteFood}
        onChange={e => dispatch({ type: 'FOOD', payload: e.target.value })}
      />
      <Input
        value={state.favoriteDrink}
        onChange={e => dispatch({ type: 'DRINK', payload: e.target.value })}
      />
    </div>
  );
};

export default Reducer;
