import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderItemQuantityController } from "./order-item-quantity.controller";
import { OrderItemQuantity } from "./order-item-quantity.entity";
import { OrderItemQuantityService } from "./order-item-quantity.service";

@Module({
    imports: [TypeOrmModule.forFeature([OrderItemQuantity])],
    providers: [OrderItemQuantityService],
    controllers: [OrderItemQuantityController]
  })
  export class OrderItemQuantityModule {}