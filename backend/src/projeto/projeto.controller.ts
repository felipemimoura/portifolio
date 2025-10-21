import { Controller, Get, Param } from '@nestjs/common';
import { ProjetoProvider } from './projeto.provider';
import { Projeto } from '@core';

@Controller('projetos')
export class ProjetoControllerController {
  constructor(private readonly projetoProvider: ProjetoProvider) { }


  @Get()
  async findAll(): Promise<Projeto[]> {
    return this.projetoProvider.getAll()
  }

  @Get(':id')
  async findById(@Param("id") id: string): Promise<Projeto | null> {
    return this.projetoProvider.getById(Number(id))
  }
}
