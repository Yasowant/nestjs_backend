import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from 'src/entities/property.entity';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepo: Repository<Property>,
  ) {}
  async findAll() {}
  async findOne() {}
  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }
  async update() {}
  async delete() {}
}
