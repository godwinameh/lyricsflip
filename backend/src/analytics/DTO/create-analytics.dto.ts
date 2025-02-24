import { ApiProperty } from '@nestjs/swagger';

export class CreateAnalyticsDto {
  @ApiProperty({ example: 1, description: 'Player ID' })
  playerId: number;

  @ApiProperty({ example: 'Cyber Battle', description: 'Game title' })
  gameTitle: string;

  @ApiProperty({ example: 'Action', description: 'Game genre' })
  genre: string;

  @ApiProperty({ example: 1200, description: 'Player score' })
  score: number;

  @ApiProperty({ example: 350, description: 'Response time in milliseconds' })
  responseTimeMs: number;

  @ApiProperty({ example: 45, description: 'Session duration in minutes' })
  sessionDuration: number;

  @ApiProperty({ example: 60, description: 'Frames per second (FPS)' })
  fps: number;
}
