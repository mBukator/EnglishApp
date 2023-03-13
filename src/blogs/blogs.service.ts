import { Injectable } from '@nestjs/common';
import { blogs } from 'src/moks/blogs';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
  private blogs: Blog[] = blogs;
  async create(createBlogDto: CreateBlogDto) {
    console.log('newBlog', createBlogDto);
    this.blogs.push(createBlogDto);
    return createBlogDto;
  }

  async findAll() {
    return this.blogs;
  }

  async findOne(id: number) {
    for(var i = 0; i < this.blogs.length; i++) {
      if(this.blogs[i]._id === id)
        return this.blogs[i];
    }
    return "null";
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    let toUpdate = this.findOne(id);
    let updated = Object.assign(toUpdate, updateBlogDto);
    return updated;
  }

  async remove(id: number) {
    let toRemove = this.findOne(id);
    return this.blogs.splice(+toRemove, 1);
  }
}
