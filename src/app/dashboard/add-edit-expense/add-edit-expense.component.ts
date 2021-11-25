import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.css']
})
export class AddEditExpenseComponent implements OnInit {
  categoryType:any;
  submitted: boolean = false;

  // @Output() closeAddEditModal = new EventEmitter();
 
  categoryList:any[]=[];
  reactiveForm: FormGroup;

  constructor( private activeModal: NgbActiveModal, private router: Router,
    private fb: FormBuilder, private ExpService:ExpenseService) {
      this.reactiveForm = this.fb.group({
        NameExp:new FormControl('',[Validators.required]),
        category: new FormControl('',[Validators.required]),
        PaymentDate: new FormControl('',[Validators.required]),
        Total_Amount: new FormControl('',[Validators.required]),
        status:new FormControl('',[Validators.required]),
      });
     }

  ngOnInit(): void {
    this.ExpService.categoryLst().subscribe(res=>{
      console.log("Catogary=="+res);
      this.categoryList=res.filter((element: { status: any; })=> element.status != 'Inactive');
      // this.categoryList=res;
    })
    if(this.categoryType.type === 'Edit'){
      // const id1 = Number(this.categoryType.Id);
      // const result = this.categoryList.find( ({ id }) => id === id1 );
      // console.log(result);
      // this.reactiveForm.patchValue(result);

      const id1 = Number(this.categoryType.Id);
      this.ExpService.patchItem(id1).subscribe((res) => {
        this.reactiveForm.patchValue(res);
      });

    }
  }
  get f() {
    return this.reactiveForm.controls
  }

  modalClose() {
    this.activeModal.close('Cancel');
  }

  onSubmit(){
    this.submitted = true;

    if (this.reactiveForm.invalid) {
      return;
    }
    if (this.categoryType.type === 'Add'){
   this.ExpService.create(this.reactiveForm.value).subscribe(()=>{

   })
  }
  else{
    const id1 = Number(this.categoryType.Id);
    this.ExpService.update(id1, this.reactiveForm.getRawValue()).subscribe(() => {
        // alert('Suceess');
      });
  }

  //  console.log(this.reactiveForm.value);


  this.reactiveForm.reset();
   this. modalClose();
  }
  // closeModal() {
  //   //its for ouput decorator
  //   this.closeAddEditModal.emit('close');
  // }


}
