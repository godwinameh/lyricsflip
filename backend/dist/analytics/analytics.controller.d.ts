import { AnalyticsService } from './provider/analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    trackSession(data: CreateAnalyticsDto): Promise<import("./analytics.entity").Analytics>;
    getPlayerHistory(playerId: number): Promise<import("./analytics.entity").Analytics[]>;
    getScoreDistribution(): Promise<any[]>;
    getResponseTimeAnalysis(): Promise<any>;
}
