import { Repository } from 'typeorm';
import { Analytics } from '../analytics.entity';
import { CreateAnalyticsDto } from '../dto/create-analytics.dto';
export declare class AnalyticsService {
    private analyticsRepository;
    constructor(analyticsRepository: Repository<Analytics>);
    trackSession(data: CreateAnalyticsDto): Promise<Analytics>;
    getPlayerHistory(playerId: number): Promise<Analytics[]>;
    getScoreDistribution(): Promise<any[]>;
    getResponseTimeAnalysis(): Promise<any>;
}
