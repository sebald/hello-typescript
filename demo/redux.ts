import { Reducer } from 'redux';
import { getId } from './lib';

// messages/types.ts
const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: {
    id: number;
    message: string;
  };
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  payload: {
    id: number;
  };
}

type MessageActionTypes = SendMessageAction | DeleteMessageAction;

// message/actions.ts
export const sendMessage = (newMessage: string): SendMessageAction => ({
  type: SEND_MESSAGE,
  payload: {
    id: getId(),
    message: newMessage,
  },
});

export const deleteMessage = (id: number): DeleteMessageAction => ({
  type: DELETE_MESSAGE,
  payload: {
    id,
  },
});

// messages/reducer.ts
interface MessageState {
  readonly messages: { id: number; message: string }[];
}

const initialState: MessageState = {
  messages: [],
};

export const reducer: Reducer<MessageState, MessageActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload],
      };
    case 'DELETE_MESSAGE':
      return {
        messages: state.messages.filter(
          message => message.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
