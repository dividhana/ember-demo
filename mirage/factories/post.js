import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  bookname() {
   return faker.company.companyName();
  },
 authorname() {
    return faker.name.firstName();
  },
 authoremail() {
    return faker.internet.email();
  },
  authorphone() {
    return faker.phone.phoneNumber();
  },
  bookdescription() {
    return faker.lorem.paragraph();
  },
bookpublishedat(){
  return faker.date.past();
},
bookprice() {
     return faker.commerce.price();
}
 
});