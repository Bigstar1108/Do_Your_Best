import { Controller, Get, Param, Post, Delete } from '@nestjs/common';

@Controller('movies') // controller의 entry point를 설정해준다.
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies';
    }

    @Get('/:id')
    getOne(@Param("id") movieId:string){
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(){
        return 'This will create movie';
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `This will remove movie ${movieId}`;
    }
}
