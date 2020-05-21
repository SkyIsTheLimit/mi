import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  isSpinner = false;
  isDisabled = false;

  isDataLoading = false;
  isProgressBarDataLoading = false;
  showProgressBar = false;
  progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

  loadData() {
    this.isDataLoading = true;
    this.progress = 0;

    const intervalId = setInterval(() => {
      this.progress += 0.7;
      
      if(this.progress >= 100) {
        this.isDataLoading = false;
        this.isProgressBarDataLoading = false;
        this.showProgressBar = false;
        clearInterval(intervalId);
      }
    }, 10);
  }

  loadDataWithProgressBar() {
    this.showProgressBar = true;
    this.isProgressBarDataLoading = true;
    this.loadData();
  }

}
