import Ember from 'ember';
import layout from '../templates/components/ember-clndr';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['clndr'],

  dateParameter: 'date',
  startWithMonth: null,
  showAdjacentMonths: true,
  adjacentDaysChangeMonth: false,

  weekOffset: 0,
  daysOfTheWeek: "Su, Mo, Tu, We, Th, Fr, Sa",

  _initializeClndr: Ember.on('didInsertElement', function() {
    var _this = this;

    return this.$().find('.ember-clndr').clndr({
      events: this.get('events'),
      dateParameter: this.get('dateParameter'),
      weekOffset: this.get('weekOffset'),
      showAdjacentMonths: this.get('showAdjacentMonths'),
      adjacentDaysChangeMonth: this.get('adjacentDaysChangeMonth'),
      daysOfTheWeek: this.get('daysOfTheWeek').split(','),

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
