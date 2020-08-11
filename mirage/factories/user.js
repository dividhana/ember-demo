import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

 
  username() {
    return faker.name.lastName();
  },
 mailid() {
    return faker.internet.email();
  },
 
});