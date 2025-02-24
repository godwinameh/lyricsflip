import { ScoringService } from './scoring.service';
import { CreateScoringDto } from './dto/create-scoring.dto';
import { UpdateScoringDto } from './dto/update-scoring.dto';
export declare class ScoringController {
    private readonly scoringService;
    constructor(scoringService: ScoringService);
    create(createScoringDto: CreateScoringDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateScoringDto: UpdateScoringDto): any;
    remove(id: string): any;
}
