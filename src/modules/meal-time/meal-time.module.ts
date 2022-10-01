import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MealTimeController } from "./meal-time.controller";
import { MealTime } from "./meal-time.entity";
import { MealTimeService } from "./meal-time.service";

@Module({
    imports: [TypeOrmModule.forFeature([MealTime])],
    providers: [MealTimeService],
    controllers: [MealTimeController]
  })
  export class MealTimeModule {}