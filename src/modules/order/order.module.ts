import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "./order.controller";
import { Order } from "./order.entity";
import { OrderServie } from "./order.service";

@Module({
    imports: [TypeOrmModule.forFeature([Order])],
    providers: [OrderServie],
    controllers: [OrderController]
  })
  export class OrderModule {}