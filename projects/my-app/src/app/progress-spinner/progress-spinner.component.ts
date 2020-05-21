import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  @Input()
  showSpinner = false;

  @Input()
  showProgress = false;

  @Input()
  progress = 0;

  @Input()
  rightSpacing = false;

  @Input()
  leftSpacing = false;

  constructor() { }

  ngOnInit(): void {
  }

}
