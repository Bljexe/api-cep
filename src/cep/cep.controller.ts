import {
  Controller,
  Get,
  Param,
  HttpStatus,
  Res,
  HttpException,
} from '@nestjs/common';
import { CepService } from './cep.service';
import { GetCepDto } from './dto/get-cep.dto';
import { Response } from 'express';

@Controller('')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(':cep')
  async findOne(@Param('cep') cep: string, @Res() res: Response) {
    if (typeof cep !== 'string') {
      throw new HttpException(
        'CEP não foi passado como string',
        HttpStatus.BAD_REQUEST,
      );
    } else if (!/^\d+$/.test(cep)) {
      throw new HttpException(
        'Cep não pode conter caracteres especiais somente numeros',
        HttpStatus.BAD_REQUEST,
      );
    } else if (cep.length !== 8) {
      throw new HttpException(
        'Cep não contem 8 Digitos',
        HttpStatus.BAD_REQUEST,
      );
    }

    const cepDto = new GetCepDto();
    cepDto.cep = cep;

    const response = await this.cepService.findOne(cepDto);

    if (response.erro) {
      throw new HttpException(
        'Não foi possível encontrar o CEP',
        HttpStatus.NOT_FOUND,
      );
    }

    return res.json(response);
  }
}
