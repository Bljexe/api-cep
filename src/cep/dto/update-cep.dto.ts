import { PartialType } from '@nestjs/mapped-types';
import { CreateCepDto } from './create-cep.dto';

export class UpdateCepDto extends PartialType(CreateCepDto) {}
