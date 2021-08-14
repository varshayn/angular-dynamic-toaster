import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-dynamic-toaster',
  template: `
  <ng-container *ngIf="isDisplayToaster">
  <div [ngStyle]= "{'background-color': getToasterColor()}"    
       [ngClass]="{
        'toaster-base' : true,
        'toast-top-left': toasterPosition === 'toast-top-left',
        'toast-top-right': toasterPosition === 'toast-top-right',
        'toast-bottom-left': toasterPosition === 'toast-bottom-left',
        'toast-bottom-right': toasterPosition === 'toast-bottom-right'}">
      <a *ngIf="isShowCloseButton" href="#" (click)="closeToaster()" class="close-toaster"></a>
      <ng-container *ngIf="isDisplayToasterTitle">
          <div><b>{{toasterTitle}}</b></div>
      </ng-container>
      <ng-container *ngIf="isDisplayToasterMessage">
      <p class="toaster-text toaster-text-top-left" [innerHTML]="toasterMessage"></p>
  </ng-container>
  </div>
</ng-container>
  `,
  styles: ['./ng-dynamic-toaster.scss']
})
export class NgDynamicToasterComponent implements OnInit {

  @Input() isDisplayToasterTitle: boolean = true;
  @Input() toasterTitle: string = 'Sample Title';

  @Input() isDisplayToasterMessage: boolean = true;
  @Input() toasterMessage: string = 'Sample message';

  @Input() toasterPosition: string = 'toast-top-right';

  @Input() isDisplayToaster: boolean = false;
  @Input() toasterColor: string = 'Success';

  @Input() isShowCloseButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getToasterColor() {
    (this.toasterColor === '' || this.toasterColor === undefined) ? this.toasterColor = 'Success' : this.toasterColor;
    switch(this.toasterColor){
      case 'Success':
      return 'rgb(135, 208, 122)';

      case 'Failure':
      return 'rgb(167, 26, 59, 0.7)';

      case 'Warning':
      return 'rgb(223, 198, 36, 0.7)';

      case 'Information':
        return 'rgb(36, 170, 223, 0.7)'

      default:
      return this.toasterColor;
    };
  }

  closeToaster() {
    this.isDisplayToaster = false;
  }

}
