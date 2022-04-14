import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';

  constructor(
    private _modalService: BsModalService
  ) {
    
  }

  ngOnInit() {
    console.log("init done here!");
    console.log("Open Longin modal!");
    this.openLoginModal();
  }

  openLoginModal() {
    console.log("Request to open modal from button");
    
    const initialState = {
      value: "some"
    }
    this._modalService.show(LoginModalComponent, {initialState});
  }
}
