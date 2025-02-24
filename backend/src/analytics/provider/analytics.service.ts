import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Analytics } from '../analytics.entity';
import { CreateAnalyticsDto } from '../dto/create-analytics.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Analytics)
    private analyticsRepository: Repository<Analytics>,
  ) {}

  async trackSession(data: CreateAnalyticsDto) {
    const analytics = this.analyticsRepository.create(data);
    return await this.analyticsRepository.save(analytics);
  }

  async getPlayerHistory(playerId: number) {
    return await this.analyticsRepository.find({ where: { player: { id: playerId as any } } });
  }

  async getScoreDistribution() {
    return await this.analyticsRepository
      .createQueryBuilder('analytics')
      .select('analytics.score, COUNT(*) AS count')
      .groupBy('analytics.score')
      .getRawMany();
  }

  async getResponseTimeAnalysis() {
    return await this.analyticsRepository
      .createQueryBuilder('analytics')
      .select('AVG(analytics.responseTimeMs) AS avgResponseTime')
      .getRawOne();
  }
}
