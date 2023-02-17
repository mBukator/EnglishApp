import { Injectable, UseFilters } from '@nestjs/common';
import { tasks } from 'src/moks/tasks';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { NoDataExeption } from './tasks.exeptions';
import { NoDataExeptionFilter } from './tasks.filter';

@Injectable()
export class TasksService {
  private tasks: Task[] = tasks;

  async createTask(createTaskDto: CreateTaskDto) {
    console.log('newTask', createTaskDto);
    this.tasks.push(createTaskDto);
    return createTaskDto;
  }

  @UseFilters(new NoDataExeptionFilter())
  async getTasks() {
    if(this.tasks == null) {
      throw new NoDataExeption();
    }
    return this.tasks;
  }

  @UseFilters(new NoDataExeptionFilter())
  async getOne(id: number) {
    if(this.tasks == null) {
      throw new NoDataExeption();
    }
    for(var i = 0; i < this.tasks.length; i++) {
      if(tasks[i]._id === id)
        return tasks[i];
    }
    return "null";
  }

  @UseFilters(new NoDataExeptionFilter())
  async getMemberTask(id: number) {
    if(this.tasks == null) {
      throw new NoDataExeption();
    }
    let memberTasks = [];
    for(var i = 0; i < this.tasks.length; i++) {
      if(tasks[i].membersId.indexOf(id) !== -1)
        memberTasks.push(tasks[i])
    }
    return memberTasks;
  }

  @UseFilters(new NoDataExeptionFilter())
  async getOneTask(id: number) {
    if(this.tasks == null) {
      throw new NoDataExeption();
    }
    for(var i = 0; i < this.tasks.length; i++) {
      if(tasks[i]._id === id)
        return [i, tasks[i]];
    }
    return "null";
  }
 
  async updateTasks(id: number, updateTaskDto: UpdateTaskDto) {
    let get = this.getOneTask(id);
    let toUpdate = (await get).at(1);
    let updated = Object.assign(toUpdate, updateTaskDto);
    return updated;
  }

  async removeTask(id: number) {
    let get = this.getOneTask(id);
    let toRemove = (await get).at(0);
    return this.tasks.splice(+toRemove, 1);
  }
}
