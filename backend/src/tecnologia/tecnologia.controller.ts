import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@core'
import { TecnologiaProvider } from './tecnologia.provider';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly tecnologiaProvide: TecnologiaProvider) { }

  @Get()
  async findAll(): Promise<Tecnologia[]> {
    return this.tecnologiaProvide.getAll()
  }

  @Get("destaques")
  async getEmphasis(): Promise<Tecnologia[]> {
    return this.tecnologiaProvide.getEmphasis()
  }
}
