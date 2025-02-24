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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnalyticsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateAnalyticsDto {
}
exports.CreateAnalyticsDto = CreateAnalyticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Player ID' }),
    __metadata("design:type", Number)
], CreateAnalyticsDto.prototype, "playerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cyber Battle', description: 'Game title' }),
    __metadata("design:type", String)
], CreateAnalyticsDto.prototype, "gameTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Action', description: 'Game genre' }),
    __metadata("design:type", String)
], CreateAnalyticsDto.prototype, "genre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1200, description: 'Player score' }),
    __metadata("design:type", Number)
], CreateAnalyticsDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 350, description: 'Response time in milliseconds' }),
    __metadata("design:type", Number)
], CreateAnalyticsDto.prototype, "responseTimeMs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 45, description: 'Session duration in minutes' }),
    __metadata("design:type", Number)
], CreateAnalyticsDto.prototype, "sessionDuration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 60, description: 'Frames per second (FPS)' }),
    __metadata("design:type", Number)
], CreateAnalyticsDto.prototype, "fps", void 0);
//# sourceMappingURL=create-analytics.dto.js.map