import { Component, Input, OnInit } from '@angular/core';

export type buttonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() label = "";
  @Input() roundedCorners = false;
  @Input() type: buttonType = 'button';
  constructor() { }

  ngOnInit(): void {
  }

}
