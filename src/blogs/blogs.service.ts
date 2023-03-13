import { Injectable, UseFilters } from '@nestjs/common';
import { blogs } from 'src/moks/blogs';
import { NoDataExeption } from './blogs.exeptions';
import { NoDataExeptionFilter } from './blogs.filter';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
  private blogs: Blog[] = blogs;
  async create(createBlogDto: CreateBlogDto) {
    createBlogDto._id = blogs.length+1
    console.log('newBlog', createBlogDto);
    this.blogs.push(createBlogDto);
    return createBlogDto;
  }

  @UseFilters(new NoDataExeptionFilter())
  async findAll() {
    if(this.blogs == null) {
      throw new NoDataExeption();
    }
    return this.blogs;
  }
  
  @UseFilters(new NoDataExeptionFilter())
  async findOne(id: number) {
    if(this.blogs == null) {
      throw new NoDataExeption();
    }
    for(var i = 0; i < this.blogs.length; i++) {
      if(this.blogs[i]._id === id)
        return this.blogs[i];
    }
    return null
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    let toUpdate = this.findOne(id);
    let updated = Object.assign(await toUpdate, updateBlogDto);
    return updated;
  } 

  async remove(id: number) {
    let toRemove = this.findOne(id);
    if (await toRemove != null) {
      return this.blogs.splice(blogs.indexOf(await toRemove), 1);
    }
  }
}
