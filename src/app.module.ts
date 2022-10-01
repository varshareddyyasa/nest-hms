import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AddressModule } from './modules/address/address.module';
import { CategoryModule } from './modules/category/category.module';
import { ItemModule } from './modules/item/item.module';
import { ItemTypeModule } from './modules/item-type/item-type.module';
import { MealTimeModule } from './modules/meal-time/meal-time.module';
import { OrderModule } from './modules/order/order.module';
import { OrderItemQuantityModule } from './modules/order-item-quantity/order-item-quantity.module';
import { OrderTypeModule } from './modules/order-type/order-type.module';
import { PhoneNumberModule } from './modules/phone-number/phone-number.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '<YourStrong@Passw0rd>',
      database: 'HMS_DB',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,
      options: { encrypt: false },
      cli: {
        migrationsDir: "src/db/migration"
      }
    }),
    AddressModule,
    CategoryModule,
    ItemModule,
    ItemTypeModule,
    MealTimeModule,
    OrderModule,
    OrderItemQuantityModule,
    OrderTypeModule,
    PhoneNumberModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
