import Route from '@ember/routing/route';

export default class postsIndexRoute extends Route {
  model() {
    return this.store.findAll('post');
  }
}
