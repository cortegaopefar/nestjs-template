import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) {}

  async getAll(): Promise<Note[]> {
    return this.notesRepository.find({ order: { id: 'DESC' } });
  }

  async getById(id: number): Promise<Note> {
    const found = await this.notesRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Note ${id} not found`);
    }
    return found;
  }
}
