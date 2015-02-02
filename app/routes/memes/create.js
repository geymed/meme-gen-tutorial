import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord('meme', {
			user: this.get('whoami')
		});
	},
	actions: {
		willTransition: function(){
			this.controller.get('model').rollback();
		}
	},
	renderTemplate: function(){
		this.render('meme-with-controls');
	}
});
