import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PassSecondsService} from '../pass-seconds.service';

@Component({
  selector: 'ngbd-modal-content',
  template:
    `
    <div class = "modal-header"> Time Check </div>
    <div class = "modal-content">{{name}}</div>`
  /*`<div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>`*/
})
export class NgbdModalContent {
  @Input() string;

  constructor(
    public activeModal: NgbActiveModal
  ) {}
}

@Component({
  selector: 'ngbd-modal-component',
  template: `
    <button
        (click)="open()"
    >Big Timer</button>
  {{getTime()}}`
})
export class NgbdModalComponent {
  /*@Input() name: string;*/

  constructor(
    private modalService: NgbModal,
    private passService: PassSecondsService
  ) {}

  name = 'Test';
  test: number;
  test1: string;

  getTime(): string {
    this.passService.getSeconds()
      .subscribe(seconds => this.test = seconds); /*Observable.subscribe() */
    this.test1 = '' + this.test;
    return this.test1;
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = this.name;
  }
}
