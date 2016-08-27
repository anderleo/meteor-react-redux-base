import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';
import { Roles } from 'meteor/alanning:roles';

export default function() {
  return {
    Meteor,
    FlowRouter,
    Tracker,
    Roles
  };
}
