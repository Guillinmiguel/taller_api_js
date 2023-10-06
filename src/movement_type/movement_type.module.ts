import { Module } from '@nestjs/common';
import { MovementTypeService } from './movement_type.service';
import { MovementTypeController } from './movement_type.controller';
import { MovementType } from './entities/movement_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([MovementType])],
  controllers: [MovementTypeController],
  providers: [MovementTypeService],
})
export class MovementTypeModule {}
