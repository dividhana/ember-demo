export default function() {
  this.resource('posts');
   this.get('/users');
    this.get('/users/:id');
    this.get('/categories');
}