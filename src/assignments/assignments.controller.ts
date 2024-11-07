import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number, 10);
    const factorialResult = this.factorial(num);
    return { factorial: factorialResult };
  }

  private factorial(num: number): number {
    if (num < 0) return -1; // Factorial of a negative number is undefined
    if (num === 0 || num === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}
