import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Movement } from './entities/movement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovementsService {
  constructor(
    @InjectRepository(Movement)
    private movementrepo: Repository<Movement>
  ){
    
  }
  create(createMovementDto: CreateMovementDto) {
    return this.movementrepo.save([createMovementDto])
  }

  findAll() {
    return this.movementrepo.find();
  }

  findOne(id: number) {
    return this.movementrepo.findBy({id:id});
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return this.movementrepo.update(id, updateMovementDto);
  }

  remove(id: number) {
    return this.movementrepo.delete(id);
  }
}
