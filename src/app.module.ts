import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig), UserModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
