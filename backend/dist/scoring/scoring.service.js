"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoringService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_2 = require("typeorm");
const scoring_constants_1 = require("./constants/scoring.constants");
const scoring_events_1 = require("./events/scoring.events");
const player_entity_1 = require("../player/player.entity");
let ScoringService = class ScoringService {
    constructor(playerRepository, eventEmitter) {
        this.playerRepository = playerRepository;
        this.eventEmitter = eventEmitter;
    }
    calculateScore(params) {
        const baseScore = this.calculateBaseScore(params.isCorrect, params.difficultyLevel);
        const timeBonus = this.calculateTimeBonus(params.responseTimeMs);
        const { streakBonus, newStreak } = this.calculateStreakBonus(params.isCorrect, params.currentStreak);
        const totalScore = Math.round(baseScore + timeBonus + baseScore * streakBonus);
        const result = {
            baseScore,
            timeBonus,
            streakBonus,
            totalScore,
            newStreak,
        };
        this.eventEmitter.emit('score.calculated', new scoring_events_1.ScoreCalculatedEvent(params.playerId, result, new Date()));
        if (params.currentStreak !== newStreak) {
            this.eventEmitter.emit('streak.updated', new scoring_events_1.StreakUpdatedEvent(params.playerId, newStreak, new Date()));
        }
        return result;
    }
    calculateBaseScore(isCorrect, difficultyLevel) {
        if (!isCorrect)
            return 0;
        const difficultyMultiplier = this.getDifficultyMultiplier(difficultyLevel);
        return scoring_constants_1.SCORING_CONSTANTS.BASE_SCORE * difficultyMultiplier;
    }
    calculateTimeBonus(responseTimeMs) {
        if (!this.isValidResponseTime(responseTimeMs))
            return 0;
        const timeRatio = 1 -
            (responseTimeMs - scoring_constants_1.SCORING_CONSTANTS.MIN_RESPONSE_TIME_MS) /
                (scoring_constants_1.SCORING_CONSTANTS.MAX_RESPONSE_TIME_MS -
                    scoring_constants_1.SCORING_CONSTANTS.MIN_RESPONSE_TIME_MS);
        return Math.round(scoring_constants_1.SCORING_CONSTANTS.MAX_TIME_BONUS * Math.max(0, timeRatio));
    }
    calculateStreakBonus(isCorrect, currentStreak) {
        if (!isCorrect) {
            return { streakBonus: 0, newStreak: 0 };
        }
        const newStreak = currentStreak + 1;
        const streakBonus = Math.min(newStreak * scoring_constants_1.SCORING_CONSTANTS.STREAK_BONUS_INCREMENT, scoring_constants_1.SCORING_CONSTANTS.MAX_STREAK_BONUS_MULTIPLIER - 1);
        return { streakBonus, newStreak };
    }
    getDifficultyMultiplier(level) {
        return (1 + ((level - 1) / 9) * (scoring_constants_1.SCORING_CONSTANTS.MAX_DIFFICULTY_MULTIPLIER - 1));
    }
    isValidResponseTime(responseTimeMs) {
        return (responseTimeMs >= scoring_constants_1.SCORING_CONSTANTS.MIN_RESPONSE_TIME_MS &&
            responseTimeMs <= scoring_constants_1.SCORING_CONSTANTS.MAX_RESPONSE_TIME_MS);
    }
    async updatePlayerScore(playerId, scoreResult) {
        const player = await this.playerRepository.findOne({
            where: { id: playerId },
        });
        if (!player) {
            throw new Error(`Player ${playerId} not found`);
        }
        player.score += scoreResult.totalScore;
        player.currentStreak = scoreResult.newStreak;
        player.highestStreak = Math.max(player.highestStreak, scoreResult.newStreak);
        await this.playerRepository.save(player);
    }
};
exports.ScoringService = ScoringService;
exports.ScoringService = ScoringService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        event_emitter_1.EventEmitter2])
], ScoringService);
//# sourceMappingURL=scoring.service.js.map