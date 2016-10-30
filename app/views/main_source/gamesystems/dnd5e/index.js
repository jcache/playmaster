import GMMessage from './Campaigns'
import Stats from './validators'


export default function({ dispatch }) {
  return next => action => {
    console.log('An action fired and was caught by Game System: ', action);

    // HANDLE ACTION WHEN NOT A PROMISE
    if (!action.payload || !action.payload.then) {

      if (action.type === "fetch_characters") {
        console.log('Example of handling data stuffs. In this case fetch_characters!  action:', action);
      }

      // FYI A bit of the below if statment is psudo-code
      if (action.type === "redux-form/STAT" && Stats.has(meta.field.name) {

        console.log('Example of handling stat validation. In this case fetch_characters!  action:', action);

        if (Stats(meta.field.value) ) {
          return next(action);
        }
        else {

          return next({ ...action, payload: error });

        }
      }
      Stats

      return next(action);
    }

    // SENDING A SECRET MESSAGE TO THE GM
    if (action.type === "EVO/GMMessage") {

      console.log('Example of sending a message to the GM!  action:', action);

      action.payload.then(response => {
        
        console.log('Was message received by the GM?: ', response);

        const newAction = { ...action, payload: response };

        return dispatch(newAction);
      });
    }


    next(action);
  }
}
