import { Movement } from "src/movements/entities/movement.entity";
import { ProductType } from "src/product_types/entities/product_type.entity";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

   
    @Column()
    description: String;

    @Column({nullable:true})
    quantity: number;

    @ManyToOne(() => ProductType, (product_type) => product_type.id)
    @JoinColumn({ name: 'product_type_id' })
    product_type: ProductType

    @RelationId((product: Product) => product.product_type)
    @Column({ type: 'integer' })
    product_type_id:number;

    @OneToMany(() => Movement, (movement) => movement.product_id)
    movement: Movement[]
    
    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at
}
