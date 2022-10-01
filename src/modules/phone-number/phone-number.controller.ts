import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { PhoneNumber } from "./phone-number.entity";
import { PhoneNumberService } from "./phone-number.service";

@Crud({
    model:{
    type: PhoneNumber
}})
@Controller('phoneNumber')
export class PhoneNumberController implements CrudController<PhoneNumber>
{
    constructor(public service: PhoneNumberService){}
}