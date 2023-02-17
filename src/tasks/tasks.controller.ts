import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('get-all-tasks')
  async getTasks() {
    return this.tasksService.getTasks();
  }

  @Post('create-task')
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.tasksService.getOne(+id);
  }

  @Get(':id/involved-in')
  async getMemberTask(@Param('id') id: string) {
    return this.tasksService.getMemberTask(+id);
  }

  @Patch(':id')
  async updateTasks(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTasks(+id, updateTaskDto);
  }

  @Delete(':id')
  async removeTask(@Param('id') id: string) {
    return this.tasksService.removeTask(+id);
  }
}
