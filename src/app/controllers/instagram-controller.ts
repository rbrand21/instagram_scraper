import { Controller, Get, Param, Res, HttpStatus} from '@nestjs/common';
import { InstagramService } from '../services/instagram-service';
import { InstagramPost } from '../interfaces/instagram-post';
import { Response } from 'express';
@Controller('instagram')
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get('photos/:handleName')
  getInstagramPosts(@Param() queryParam: any, @Res() response: Response): void {
    const handleName: string = queryParam.handleName;
    this.instagramService.getPostsFor(handleName).subscribe(
      (posts: InstagramPost[]) => {
        if (posts.length === 0) {
          response.status(HttpStatus.NOT_FOUND).send({
            message: `Cannot find posts for ${handleName}`
          });
        } else {
          response.status(HttpStatus.OK).send(posts);
        }
      }
    );
  }
}
