import Ember from 'ember';

export default Ember.ArrayController.extend({
	sortProperties: ['timestamp'],
	sortAscending: false,
	actions: {
		publishPost: function() {
			var newPost = this.store.createRecord('post', {
				postTitle: this.get('postTitle'),
				postBody: this.get('postBody'),
				timestamp: new Date().getTime()
			});
			newPost.save();
			this.setProperties({
				postTitle: '',
				postBody: ''
			});
		}
	}
});
