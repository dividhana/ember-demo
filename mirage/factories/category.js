import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

 
  categoryname() {
    return faker.commerce.department();
  },

});