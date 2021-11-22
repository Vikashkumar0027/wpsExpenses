import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() modalContent: any;
  @Output() Update =new EventEmitter();

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  
  }
  modalClose() {
    this.activeModal.close('Cancel');
  }

  cancel(){
    // this.Update.emit('cancel');
    this.activeModal.close('Cancel');
  }
  ok(){
    // this.Update.emit('delete');
    this.activeModal.close('delete');

  }


}
