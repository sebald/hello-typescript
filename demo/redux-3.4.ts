import { Reducer } from 'redux';
import { getId } from './lib';

// message/actions.ts
const sendMessage = (newMessage: string) =>
  ({
    type: 'SEND_MESSAGE',
    payload: {
      id: getId(),
      message: newMessage,
    },
  } as const);

const deleteMessage = (id: number) =>
  ({
    type: 'DELETE_MESSAGE',
    payload: {
      id,
    },
  } as const);

// prettier-ignore
type MessageActions = ReturnType<
  | typeof sendMessage 
  | typeof deleteMessage
>;

// messages/reducer.ts
interface MessageState {
  readonly messages: { id: number; message: string }[];
}

const initialState: MessageState = {
  messages: [],
};

export const reducer: Reducer<MessageState, MessageActions> = (
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
