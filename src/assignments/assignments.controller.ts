import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('prime/:number')
  checkPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
}
