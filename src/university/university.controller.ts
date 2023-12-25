import { Controller, Get, Param } from '@nestjs/common';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  getHello(): { message: string } {
    return this.universityService.getHello();
  }

  @Get('/disciplines')
  disciplines() {
    return this.universityService.disciplines();
  }

  @Get('/discipline/:id')
  discipline(@Param('id') id: number) {
    return this.universityService.findDisciplineById(id);
  }

  @Get('/discipline/data/failures')
  disciplineFailures() {
    return this.universityService.disciplineFailures();
  }

  @Get('/discipline/data/progress')
  disciplineProgressAll() {
    return this.universityService.disciplineProgressAll();
  }

  @Get('/discipline/data/progress/:id')
  disciplineProgress(@Param('id') id: number) {
    return this.universityService.disciplineProgress(id);
  }

  @Get('/students')
  students() {
    return this.universityService.students();
  }

  @Get('/student/:id')
  student(@Param('id') id: number) {
    return this.universityService.findStudentById(id);
  }

  @Get('/student/data/failures')
  studentFailures() {
    return this.universityService.studentFailures();
  }

  @Get('/student/data/progress/:id')
  studentDiscipline(@Param('id') id: number) {
    return this.universityService.studentProgress(id);
  }

  @Get('/student/data/progress')
  studentDisciplineAll() {
    return this.universityService.studentProgressAll();
  }
}
