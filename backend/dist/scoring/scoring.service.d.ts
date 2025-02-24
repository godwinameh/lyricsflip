import { EventEmitter2 } from '@nestjs/event-emitter';
import { Repository } from 'typeorm';
import { ScoreCalculationDto, ScoreResult } from './types/scoring.types';
import { Player } from 'src/player/player.entity';
export declare class ScoringService {
    private readonly playerRepository;
    private eventEmitter;
    constructor(playerRepository: Repository<Player>, eventEmitter: EventEmitter2);
    calculateScore(params: ScoreCalculationDto): ScoreResult;
    private calculateBaseScore;
    private calculateTimeBonus;
    private calculateStreakBonus;
    private getDifficultyMultiplier;
    private isValidResponseTime;
    updatePlayerScore(playerId: string, scoreResult: ScoreResult): Promise<void>;
}
