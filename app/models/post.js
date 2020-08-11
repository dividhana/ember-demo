import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr bookname;
  @attr authorname;
 @attr authoremail;
 @attr authorphone;
 @attr('date') bookpublishedat;
@attr bookdescription;
@attr bookprice;
  
  get formattedPublishedAt() {
    return this.bookpublishedat.toLocaleDateString("en-US");
  }
}

