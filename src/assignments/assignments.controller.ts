import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const numTerms = parseInt(n, 10);
    const fibonacciSequence = this.generateFibonacciSequence(numTerms);
    return { sequence: fibonacciSequence };
  }

  private generateFibonacciSequence(numTerms: number): number[] {
    const memo = new Map<number, number>();

    const fibonacci = (n: number): number => {
      if (n <= 1) return n;
      if (memo.has(n)) return memo.get(n) as number;
      
      const result = fibonacci(n - 1) + fibonacci(n - 2);
      memo.set(n, result);
      return result;
    };

    const sequence = [];
    for (let i = 0; i < numTerms; i++) {
      sequence.push(fibonacci(i));
    }
    return sequence;
  }
}
