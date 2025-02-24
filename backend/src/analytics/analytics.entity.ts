import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Analytics {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.analytics)
  player: User;

  @Column()
  gameTitle: string;

  @Column()
  genre: string;

  @Column()
  score: number;

  @Column()
  responseTimeMs: number; // Time taken to respond to an event

  @Column({ type: 'float' })
  sessionDuration: number; // Duration in minutes

  @Column()
  fps: number; // Frames per second metric

  @CreateDateColumn()
  createdAt: Date;
}
