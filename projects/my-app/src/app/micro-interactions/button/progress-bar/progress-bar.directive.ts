import { Directive, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[progressBar]',
  inputs: ['progressBar', 'progress'],
})
export class ProgressBarDirective implements AfterViewInit, OnChanges {
  $progressBar: HTMLDivElement;

  public progressBar = false;
  public progress: number = 0;

  constructor() {
    this.$progressBar = document.createElement('div');
    this.$progressBar.style.display = 'none';
    this.$progressBar.classList.add('progress-bar');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.progress && changes.progress.currentValue) {
      const currentProgress = changes.progress.currentValue;

      this.$progressBar.style.width = `${currentProgress}%`;
    }

    if(changes.progressBar) {
      if(changes.progressBar.currentValue === true) {
        this.$progressBar.style.display = 'block';
      } else if(changes.progressBar.currentValue === false) {
        this.$progressBar.style.display = 'none';
      }
    }
  }
  
  ngAfterViewInit() {
    this.$progressBar.style.width = `0px`;
    document.body.prepend(this.$progressBar);
  }
}
