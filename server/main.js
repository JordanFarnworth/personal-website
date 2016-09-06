import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../lib/collections';

Meteor.startup(() => {

  Messages.remove({});

  const messages = [
    {
      userId: 'up6i4sFRb4YHgqbFs',
      text: 'You on your way?',
      timestamp: Moment().subtract(1, 'hours').toDate()
    },
    {
      userId: 'up6i4sFRb4YHgqbFs',
      text: 'Hey, it\'s me',
      timestamp: Moment().subtract(2, 'hours').toDate()
    }
  ];

  messages.forEach((m) => {
    Messages.insert(m);
  });


});
