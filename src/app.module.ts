import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProductTypesModule } from './product_types/product_types.module';
import { MovementsModule } from './movements/movements.module';
import { MovementTypeModule } from './movement_type/movement_type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductType } from './product_types/entities/product_type.entity';
import { Product } from './products/entities/product.entity';
import { Movement } from './movements/entities/movement.entity';
import { MovementType } from './movement_type/entities/movement_type.entity';

@Module({
  imports: [ProductsModule, ProductTypesModule, MovementsModule, MovementTypeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tallerapi',
      entities: [
        ProductType,
        Product,
        Movement,
        MovementType
      ],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
