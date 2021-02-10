import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') texto: string[]

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
