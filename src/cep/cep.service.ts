import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { fetchCepFromViaCep, ViaCepResponse } from './api/fetch-cep';
import { GetCepDto } from './dto/get-cep.dto';

@Injectable()
export class CepService {
  constructor(private prisma: PrismaService) {}

  async findOne(cepNumber: GetCepDto): Promise<ViaCepResponse> {
    const cepDetails = await fetchCepFromViaCep(cepNumber.cep);

    //Verificando se na requisição contem erro
    if (cepDetails.erro) {
      return cepDetails;
    }

    // Verificando se o CEP já existe no Banco de Dados
    const cepExist = await this.prisma.cep.findUnique({
      where: {
        cep: cepDetails.cep,
      },
    });

    // Inserindo dados do CEP no banco de dados caso não tenha erro e não exista no banco.
    if (!cepDetails.erro && !cepExist) {
      await this.prisma.cep.create({
        data: cepDetails,
      });

      console.log('Inserindo CEP: ' + cepDetails.cep);
    }

    return cepDetails;
  }
}
