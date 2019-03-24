import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from '../services/health-check-service';

@Controller()
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  getHealthStatus(): string {
    return this.healthCheckService.getHealthStatus();
  }
}
