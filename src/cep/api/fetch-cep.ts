import axios from 'axios';

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

export async function fetchCepFromViaCep(cep: string): Promise<ViaCepResponse> {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
}
