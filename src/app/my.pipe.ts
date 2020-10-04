import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

/**
 * Obfuscator
 * 
 * The placeholder could be passed as argument
 * 
 * Usage: value | my : placeholder
 * 
 * Example: {{ 'hello' | my : 'x' }} -> 'xxxxx'
 */
@Pipe({ name: 'my' })
export class MyPipe implements PipeTransform {
  transform(value: string, placeholder?: string): string {
    let result: string = placeholder ? placeholder : '•';

    return result.repeat(value.length);
  }
}
