import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderTypeController } from "./order-type.controller";
import { OrderType } from "./order-type.entity";
import { OrderTypeService } from "./order-type.service";
import { Module } from "@nestjs/common"

@Module({
    imports: [TypeOrmModule.forFeature([OrderType])],
    providers: [OrderTypeService],
    controllers: [OrderTypeController]
  })
  export class OrderTypeModule {}