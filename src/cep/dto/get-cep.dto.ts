import { IsNotEmpty, IsString, Length } from 'class-validator';

export class GetCepDto {
  @Length(8)
  @IsString()
  @IsNotEmpty()
  cep: string;
}
