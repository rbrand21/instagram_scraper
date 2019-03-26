import { Test, TestingModule } from '@nestjs/testing';
import { InstagramController } from '../app/controllers/instagram-controller';
import { InstagramService } from '../app/services/instagram-service';

describe('Instagram Controller', () => {
  let appController: InstagramController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InstagramController],
      providers: [InstagramService],
    }).compile();

    appController = app.get<InstagramController>(InstagramController);
  });

  describe('it should be able to perform a service health check', () => {
    // it('should return healthy', () => {
    //   expect(appController.getHealthStatus()).toBe('Healthy!');
    // });
  });
});
