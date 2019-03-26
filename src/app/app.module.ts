import { Module } from '@nestjs/common';
import { InstagramController } from './controllers/instagram-controller';
import { InstagramService } from './services/instagram-service';

@Module({
  imports: [],
  controllers: [InstagramController],
  providers: [InstagramService],
})
export class AppModule {}
