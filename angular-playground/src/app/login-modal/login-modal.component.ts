import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  value?: string

  constructor(
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit(): void {
    console.log(`Now init the login modal! Parameter value = ${this.value}`);
  }

}
