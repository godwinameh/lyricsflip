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
exports.ScoringController = void 0;
const common_1 = require("@nestjs/common");
const scoring_service_1 = require("./scoring.service");
const create_scoring_dto_1 = require("./dto/create-scoring.dto");
const update_scoring_dto_1 = require("./dto/update-scoring.dto");
let ScoringController = class ScoringController {
    constructor(scoringService) {
        this.scoringService = scoringService;
    }
    create(createScoringDto) {
        return this.scoringService.create(createScoringDto);
    }
    findAll() {
        return this.scoringService.findAll();
    }
    findOne(id) {
        return this.scoringService.findOne(+id);
    }
    update(id, updateScoringDto) {
        return this.scoringService.update(+id, updateScoringDto);
    }
    remove(id) {
        return this.scoringService.remove(+id);
    }
};
exports.ScoringController = ScoringController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scoring_dto_1.CreateScoringDto]),
    __metadata("design:returntype", void 0)
], ScoringController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScoringController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoringController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_scoring_dto_1.UpdateScoringDto]),
    __metadata("design:returntype", void 0)
], ScoringController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoringController.prototype, "remove", null);
exports.ScoringController = ScoringController = __decorate([
    (0, common_1.Controller)('scoring'),
    __metadata("design:paramtypes", [scoring_service_1.ScoringService])
], ScoringController);
//# sourceMappingURL=scoring.controller.js.map