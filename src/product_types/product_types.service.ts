import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { Repository } from 'typeorm';
import { ProductType } from './entities/product_type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductTypesService {

  constructor(
      @InjectRepository(ProductType)
      private productyperepo: Repository<ProductType>
  ){   
  }

  create(createProductTypeDto: CreateProductTypeDto) {
    return this.productyperepo.save([createProductTypeDto])
  }

  findAll() {
    return this.productyperepo.find();
  }

  findOne(id: number) {
    return this.productyperepo.findBy({id:id});
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return this.productyperepo.update(id, updateProductTypeDto);
  }

  remove(id: number) {
    return this.productyperepo.delete(id);
    }
}
