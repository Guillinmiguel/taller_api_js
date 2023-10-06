import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productrepo: Repository<Product>
  ){
    
  }
  create(createProductDto: CreateProductDto) {
    return this.productrepo.save([createProductDto])
  }

  findAll() {
    return this.productrepo.find();
  }

  findOne(id: number) {
    return this.productrepo.findBy({id:id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productrepo.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productrepo.delete(id);
  }
}
