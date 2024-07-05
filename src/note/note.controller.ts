import { Controller, Get, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.entity';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}
  @Get()
  getAll(): Promise<Note[]> {
    return this.noteService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<Note> {
    return this.getById(id);
  }
}
