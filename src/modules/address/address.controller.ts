import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Address } from "./address.entity";
import { AddressService } from "./address.service";

@Crud({
    model: {
        type: Address
    }
})
@Controller('address')
export class AddressController implements CrudController<Address>{
    constructor(public service: AddressService){}
}