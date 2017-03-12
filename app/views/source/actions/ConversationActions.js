import * as types from '../constants/ConversationActionTypes';
import ConversationController from '../models/conversation_data';

function loadConversations(conversations) {
  return {
    type: types.LOAD_CONVERSATIONS,
    conversations: conversations
  }
}

export function LoadConversations(pid){
  return dispatch => {
    ConversationController.getConversations(pid,conversations => {
      dispatch(loadConversations(conversations));
    })
  }
}
