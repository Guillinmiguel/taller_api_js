
import { Product } from "src/products/entities/product.entity";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()

export class ProductType {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique: true})
    description: String;
    @OneToMany(() => Product, (product) => product.product_type_id)
    product: Product[]

    @CreateDateColumn()
    created_at

    @UpdateDateColumn()
    updated_at

    @DeleteDateColumn()
    deleted_at
}
