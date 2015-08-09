import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var events = [
	    	{ date: '2015-07-09', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' },
	    	{ date: '2015-07-12', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' },
	    	{ date: '2015-07-15', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' },
	    	{ date: '2015-07-22', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' },
	    	{ date: '2015-07-03', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' },
	    	{ date: '2015-07-30', title: 'CLNDR GitHub Page Finished', url: 'http://github.com/kylestetz/CLNDR' }
	  	];

	  	return { events: events };
	},

	actions: {
		clickEvent: function (target) {
			console.log('route action for click event: ', target);
		},
      	nextMonth: function(month){
			console.log('route action for nextMonth event: ', month);
        },
        previousMonth: function(month){
			console.log('route action for previousMonth event: ', month);
        },
        onMonthChange: function(month){
			console.log('route action for onMonthChange event: ', month);
        },
        today: function(month){
			console.log('route action for today event: ', month);
        }
	}
});
