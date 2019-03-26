import { Injectable } from '@nestjs/common';
import GetInstagramPosts from 'instagram-html-scrape';
import { from, Observable} from 'rxjs';
import {InstagramPost} from '../interfaces/instagram-post';
@Injectable()
export class InstagramService {

  getPostsFor(handleName: string): Observable<InstagramPost[]> {
    return from(new GetInstagramPosts(handleName).request()) as Observable<InstagramPost[]>;
  }
}
