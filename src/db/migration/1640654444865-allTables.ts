import {MigrationInterface, QueryRunner} from "typeorm";

export class allTables1640654444865 implements MigrationInterface {
    name = 'allTables1640654444865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_c15e0393f5bebfb602fb0778972" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_a7f046d46350d4bc4aa0f7c113a" DEFAULT getdate(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item_type" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_38b333d33a56991cb33837060b6" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c0368f722aa179d42a6b9e9fcb7" DEFAULT getdate(), CONSTRAINT "PK_64cde7db02a99c28d4b67efb367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_time" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "time" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_6b042ff648e647dc4fb6a0d47b1" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c71f4d9336b8aa93fef819403fd" DEFAULT getdate(), CONSTRAINT "PK_ad3796db778ca6e86f5b741619c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" int NOT NULL IDENTITY(1,1), "itemTypeId" int NOT NULL, "mealTimeId" int NOT NULL, "categoryId" int NOT NULL, "name" nvarchar(255) NOT NULL, "prize" nvarchar(255) NOT NULL, "calorieCount" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_c5b036dd322fd93235dd6cc9711" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_e151cc43edaf5ddb4ee7c9e9e96" DEFAULT getdate(), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_item_quantity" ("id" int NOT NULL IDENTITY(1,1), "itemId" int NOT NULL, "orderId" int NOT NULL, "quantity" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_ab886c347bb7c767140cb5173c2" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_d8238dbb01a400542686af60b07" DEFAULT getdate(), CONSTRAINT "PK_76ef4bcad3c24736a50e3bd0f12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_type" ("id" int NOT NULL IDENTITY(1,1), "type" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_f02040c6b07ccbd6bc605173749" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_975606de38835b4300a2d6a9a13" DEFAULT getdate(), CONSTRAINT "PK_0ff5747bd2cb60f2465351121f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "emailId" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_e11e649824a45d8ed01d597fd93" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_80ca6e6ef65fb9ef34ea8c90f42" DEFAULT getdate(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone_number" ("id" int NOT NULL IDENTITY(1,1), "countryCode" nvarchar(255) NOT NULL, "phoneNumber" nvarchar(255) NOT NULL, "userId" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_2705863d8124937c137a01c9aaa" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_76be5a2934503ae06deb35fb1a4" DEFAULT getdate(), CONSTRAINT "PK_c16f58426537a660b3f2a26e983" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" int NOT NULL IDENTITY(1,1), "orderTypeId" int NOT NULL, "userId" int NOT NULL, "addressId" int NOT NULL, "phoneNumberId" int NOT NULL, "deliveryName" nvarchar(255) NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_7bb07d3c6e225d75d8418380f11" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_23db16cabddb9d10a73b5287bf8" DEFAULT getdate(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" int NOT NULL IDENTITY(1,1), "lineOne" nvarchar(255) NOT NULL, "lineTwo" nvarchar(255), "city" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, "zipCode" nvarchar(255) NOT NULL, "country" nvarchar(255) NOT NULL, "userId" int NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_b0ef5bbd388628e6df422d2953a" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_380edf9075c1ba3bedf571c8c52" DEFAULT getdate(), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_449c3593a1c196b51ae40c72b73" FOREIGN KEY ("itemTypeId") REFERENCES "item_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_000d18c4c36c8d0a5042dee2b33" FOREIGN KEY ("mealTimeId") REFERENCES "meal_time"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_c0c8f47a702c974a77812169bc2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item_quantity" ADD CONSTRAINT "FK_cdef14af076f33b5aadf7ba7997" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item_quantity" ADD CONSTRAINT "FK_4db41d15ca4978be167e9ae5eb6" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone_number" ADD CONSTRAINT "FK_10163df90f85bca68c3e67d090a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_2d7c6836954ba54d0fa85e5cd3c" FOREIGN KEY ("orderTypeId") REFERENCES "order_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_73f9a47e41912876446d047d015" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_0e36179296bdbb21ceed81ef459" FOREIGN KEY ("phoneNumberId") REFERENCES "phone_number"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_0e36179296bdbb21ceed81ef459"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_73f9a47e41912876446d047d015"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_2d7c6836954ba54d0fa85e5cd3c"`);
        await queryRunner.query(`ALTER TABLE "phone_number" DROP CONSTRAINT "FK_10163df90f85bca68c3e67d090a"`);
        await queryRunner.query(`ALTER TABLE "order_item_quantity" DROP CONSTRAINT "FK_4db41d15ca4978be167e9ae5eb6"`);
        await queryRunner.query(`ALTER TABLE "order_item_quantity" DROP CONSTRAINT "FK_cdef14af076f33b5aadf7ba7997"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_c0c8f47a702c974a77812169bc2"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_000d18c4c36c8d0a5042dee2b33"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_449c3593a1c196b51ae40c72b73"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "phone_number"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "order_type"`);
        await queryRunner.query(`DROP TABLE "order_item_quantity"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "meal_time"`);
        await queryRunner.query(`DROP TABLE "item_type"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
