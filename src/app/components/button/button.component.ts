import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector       : 'app-button',
  templateUrl    : './button.component.html',
  styleUrls      : [ './button.component.less' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  clickEvent() {
    console.log('You clicked me!');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
