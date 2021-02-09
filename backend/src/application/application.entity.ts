import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn({
    
  })
  id: string;

  @Column({
    
    length: 255,
  })
  name: string;

}
