import { EventEmitter } from 'events';
import { IncomingMessage, OutgoingMessage } from 'http';
import { Socket } from 'net';
import StrictEventEmitter from 'strict-event-emitter-types';

// define your events
interface Events {
  request: (request: IncomingMessage, response: OutgoingMessage) => void;
  done: void;
}

// Create strict event emitter types
const emitter: StrictEventEmitter<EventEmitter, Events> = new EventEmitter();

// req and res are contextually typed to Request and Response
emitter.on('request', (req, res) => {
  /** ... */
});

// Error: unknown event
emitter.on('somethingElse');

// Error: The 'done' event does not have a payload
emitter.on('done', x => x);

// Error: missing event payload (the response)
emitter.emit('request', new IncomingMessage(new Socket()));

// Error: incorrect payload type
emitter.emit('request', new IncomingMessage(new Socket()), false);
