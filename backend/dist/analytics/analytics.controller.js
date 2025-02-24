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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const analytics_service_1 = require("./provider/analytics.service");
const create_analytics_dto_1 = require("./dto/create-analytics.dto");
const swagger_1 = require("@nestjs/swagger");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    async trackSession(data) {
        return this.analyticsService.trackSession(data);
    }
    async getPlayerHistory(playerId) {
        return this.analyticsService.getPlayerHistory(playerId);
    }
    async getScoreDistribution() {
        return this.analyticsService.getScoreDistribution();
    }
    async getResponseTimeAnalysis() {
        return this.analyticsService.getResponseTimeAnalysis();
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Post)('/track-session'),
    (0, swagger_1.ApiOperation)({ summary: 'Track a game session' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Session tracked successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_analytics_dto_1.CreateAnalyticsDto]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "trackSession", null);
__decorate([
    (0, common_1.Get)('/player-history/:playerId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get player history' }),
    __param(0, (0, common_1.Param)('playerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getPlayerHistory", null);
__decorate([
    (0, common_1.Get)('/score-distribution'),
    (0, swagger_1.ApiOperation)({ summary: 'Get score distribution' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getScoreDistribution", null);
__decorate([
    (0, common_1.Get)('/response-time'),
    (0, swagger_1.ApiOperation)({ summary: 'Get response time analysis' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getResponseTimeAnalysis", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, swagger_1.ApiTags)('Analytics'),
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map