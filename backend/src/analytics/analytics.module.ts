import { Module } from '@nestjs/common';
import { AnalyticsService } from './provider/analytics.service';
import { AnalyticsController } from './analytics.controller';

@Module({
  providers: [AnalyticsService],
  controllers: [AnalyticsController]
})
export class AnalyticsModule {}
