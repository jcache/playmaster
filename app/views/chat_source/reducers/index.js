import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as reduxFormReducer } from 'redux-form';

// console.log('reducer: ',SelectedCharacter());
const reducer = combineReducers({
  routing: routerReducer,
});

export default reducer;
