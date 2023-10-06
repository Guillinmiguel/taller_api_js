import { Movement } from "src/movements/entities/movement.entity";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class MovementType {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    description: String;

    @OneToMany(() => Movement, (movement) => movement.movement_type_id)
    movement: Movement[]

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at
}
