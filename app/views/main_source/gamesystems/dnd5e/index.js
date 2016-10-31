import GMMessage from './Campaigns'
import Stats from './validators'

// GAME SYSTEMS
// import Badge from './badges' badge.png => 128 x 128
//
// "Nightmare Unicorns" = nightmare_unicorns_000
//   - color = 'rgba(255,0,0)'
//   - badge_uri = 'file://...'
//   - banner_uri = 'file://...'
//   - validators = {
//     stats: [
//       {
//         id: 1,
//         value: 5,
//         name: "Mental Endurance",
//         alias: "ME",
//         StatKey: "NU_ME_STAT"
//       }
//     ]
//     // bonuses: [
//     //   {id: 1, statModifier: "NU_ME_STAT", baseModifierName: ""},
//     //   {id: 2, statModifier: "NU_ME_STAT", },
//     //   {id: 3, statModifier: "NU_ME_STAT", },
//     //
//     // ]
//   }
//
//
// - assets
//   - badge
//   - color
// - validation
//   - bonus
//     - races
//     - stats
//     - skills
//   - races
//     - height
//     - region
//   - stats
//     - attributes
//   - skills
//


export default function({ dispatch }) {
  return next => action => {
    console.log('An action fired and was caught by Game System: ', action);

    // HANDLE ACTION WHEN NOT A PROMISE
    if (!action.payload || !action.payload.then) {

      if (action.type === "fetch_characters") {
        console.log('Example of handling data stuffs. In this case fetch_characters!  action:', action);
      }

      // FYI A bit of the below if statment is psudo-code
      if (action.type === "redux-form/STAT" && Stats(meta.field.name)) {

        console.log('Example of handling stat validation. In this case fetch_characters!  action:', action);

        if (Stats(meta.field.value) ) {
          return next(action);
        }
        else {

          return next({ ...action, payload: error });

        }
      }

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
