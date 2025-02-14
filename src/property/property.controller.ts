import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}
  @Get()
  findAll() {}
  @Get(':id')
  findOne() {}
  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }
  @Delete(':id')
  delete() {}
}
