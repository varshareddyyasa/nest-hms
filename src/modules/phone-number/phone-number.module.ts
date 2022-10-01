import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { PhoneNumberController } from "./phone-number.controller";
import { PhoneNumber } from "./phone-number.entity";
import { PhoneNumberService } from "./phone-number.service";


@Module({
    imports: [TypeOrmModule.forFeature([PhoneNumber])],
    providers: [PhoneNumberService],
    controllers: [PhoneNumberController]
  })
  export class PhoneNumberModule {}