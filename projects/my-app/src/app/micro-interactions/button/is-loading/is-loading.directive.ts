import { Directive, ElementRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

const createSpinner = () => {
  const $spinner = document.createElement('span');
  $spinner.className = 'spinner';
  $spinner.style.borderTopColor = 'transparent';
  $spinner.style.marginRight = '0.5em';

  return $spinner;
}

const createProgressIndicator = () => {
  const $progress = document.createElement('span');
  $progress.style.marginRight = '0.5em';
  $progress.style.color = 'white';

  return $progress;
}

const createContainer = (name: string) => {
  const $container = document.createElement('span');

  if(name) {
    $container.classList.add(name);
  }

  return $container;
}

@Directive({
  selector: '[isLoading]',
  inputs: ['isLoading', 'progress'],
})
export class IsLoadingDirective implements OnChanges{
  public isLoading: boolean = false;
  public progress: number = 0;

  private $element: HTMLElement;

  private $spinnerContainer: HTMLSpanElement;
  private $spinner: HTMLSpanElement;

  private $progressContainer: HTMLSpanElement;
  private $progress: HTMLSpanElement;

  constructor(private elementRef: ElementRef) {
    this.$element = this.elementRef.nativeElement as HTMLElement;

    this.$spinnerContainer = createContainer('spinner-container');
    this.$spinner = createSpinner();

    this.$progressContainer = createContainer('progress-container');
    this.$progress = createProgressIndicator();

    this.$element.prepend(this.$progressContainer);
    this.$element.prepend(this.$spinnerContainer);
    
    this.updateProgress(this.progress);
  }

   handleChangeInIsLoading(isLoadingChange: SimpleChange) {
    if(isLoadingChange.currentValue) {
      this.$element.setAttribute('disabled', '');
      
      if(!this.$spinnerContainer.contains(this.$spinner)) {
        this.$spinnerContainer.prepend(this.$spinner);
      }
    } else {
      this.$element.removeAttribute('disabled');

      this.$spinner.remove();
    }
  }

  updateProgress(progress: number) {
    this.$progress.innerText = `${progress}%`;
  }

  handleChangeInProgress(progressChange: SimpleChange) {
    if(this.isLoading && progressChange.currentValue) {
      if(!this.$progressContainer.contains(this.$progress) && this.progress) {
        this.$progressContainer.prepend(this.$progress);
      }

      this.updateProgress(Math.round(this.progress));
    } else {
      this.$progress.remove();
    }
  }

   ngOnChanges(changes: SimpleChanges) {
     if(changes.progress) {
       this.handleChangeInProgress(changes.progress);
     }

     if(changes.isLoading) {
       this.handleChangeInIsLoading(changes.isLoading);
     }
   }
}
