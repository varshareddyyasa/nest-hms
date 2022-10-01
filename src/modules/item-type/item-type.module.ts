import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemTypeController } from "./item-type.controller";
import { ItemType } from "./item-type.entity";
import { ItemTypeService } from "./item-type.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemType])],
    providers: [ItemTypeService],
    controllers: [ItemTypeController]
  })
  export class ItemTypeModule {}