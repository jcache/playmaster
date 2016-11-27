import path from 'path';
import { ipcRenderer, ipcMain, remote } from 'electron';
import low from 'lowdb';
import _ from 'lodash';
import uuid from 'uuid';

const dataPath = ipcRenderer.sendSync('config-paths');
const ConversationDataPath = path.resolve(dataPath, 'conversation.json');
const db = low(ConversationDataPath);
const Conversations = db.get('conversation');

export default {
  // GET PLAYERS BLOB
  getConversations(pid, cb) {
    const AllConversations = Conversations.filter({pid: pid}).value();
    cb(AllConversations);
  },
}
