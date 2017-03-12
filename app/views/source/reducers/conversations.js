import * as types from '../constants/ConversationActionTypes';

const ConversationState = {
  conversations: [],
};

export const Conversations = (state = ConversationState, action ) => {
  switch (action.type) {
    case types.LOAD_CONVERSATIONS:
      return Object.assign({}, state, {
        conversations: action.conversations
      });
   default:
    return state;
  }
}
