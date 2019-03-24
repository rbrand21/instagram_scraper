import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from '../app/controllers/health-check-controller';
import { HealthCheckService } from '../app/services/health-check-service';

describe('AppController', () => {
  let appController: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();

    appController = app.get<HealthCheckController>(HealthCheckController);
  });

  describe('it should be able to perform a service health check', () => {
    it('should return healthy', () => {
      expect(appController.getHealthStatus()).toBe('Healthy!');
    });
  });
});
