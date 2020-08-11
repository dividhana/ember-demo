import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
  actions: {
    login(user){
      this.get("session").login(user)
      this.transitionToRoute("categories")
    },
    adduser(){
       this.store.createRecord('user', {
     username: this.newusername,
     mailid: this.newmailid,
     
    }).save();
    this.set('newusername', "");
   
    this.set('newmailid', "");
    
  }
   
}

});
