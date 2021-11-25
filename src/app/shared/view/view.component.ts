import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() viewContent:any;

  constructor( private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  modalClose() {
    this.activeModal.close('Cancel');
  }
  cancel(){
    this.modalClose();
  }

}
