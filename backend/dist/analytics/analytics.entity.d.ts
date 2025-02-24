import { User } from 'src/user/user.entity';
export declare class Analytics {
    id: number;
    player: User;
    gameTitle: string;
    genre: string;
    score: number;
    responseTimeMs: number;
    sessionDuration: number;
    fps: number;
    createdAt: Date;
}
