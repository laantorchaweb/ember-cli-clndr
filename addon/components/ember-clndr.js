import Ember from 'ember';
import layout from '../templates/components/ember-clndr';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['clndr'],

  startWithMonth: null,
  weekOffset: 0,
  daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  days: [],

  _initializeClndr: Ember.on('didInsertElement', function() {
    var _this = this;

    return this.$().find('.ember-clndr').clndr({
      events: this.get('events'),
      clickEvents: {
        click: function(target){
          _this.sendAction('click', target);
        },
        nextMonth: function(month){
          _this.sendAction('nextMonth', month);
        },
        previousMonth: function(month){
          _this.sendAction('previousMonth', month);
        },
        onMonthChange: function(month){
          _this.sendAction('onMonthChange', month);
        },
        today: function(month){
          _this.sendAction('today', month);
        }
      },
    });
  })
});
