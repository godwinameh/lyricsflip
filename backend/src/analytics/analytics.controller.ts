import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AnalyticsService } from './provider/analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post('/track-session')
  @ApiOperation({ summary: 'Track a game session' })
  @ApiResponse({ status: 201, description: 'Session tracked successfully' })
  async trackSession(@Body() data: CreateAnalyticsDto) {
    return this.analyticsService.trackSession(data);
  }

  @Get('/player-history/:playerId')
  @ApiOperation({ summary: 'Get player history' })
  async getPlayerHistory(@Param('playerId') playerId: number) {
    return this.analyticsService.getPlayerHistory(playerId);
  }

  @Get('/score-distribution')
  @ApiOperation({ summary: 'Get score distribution' })
  async getScoreDistribution() {
    return this.analyticsService.getScoreDistribution();
  }

  @Get('/response-time')
  @ApiOperation({ summary: 'Get response time analysis' })
  async getResponseTimeAnalysis() {
    return this.analyticsService.getResponseTimeAnalysis();
  }
}
