# AngularModalDemo
Angular Demo with ngx-bootstrap


1. install ngx-bootstrap with [`ng add ngx-bootstrap`](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started)
2. import required components in `app.module.ts`
```
    import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
    //....
    imports: [
        ModalModule.forRoot()
    ],
    providers: [
        BsModalRef
    ],
```
3. Create a modal component using `ng generate component login-modal`
4. In the `login-modal.component.html` add the html code for the modal window.
5. The `LoginModalComponent` must take a `BsModalRef` object as parameter
```
    constructor(public bsModalRef: BsModalRef) {     
    }
```
6. (Optional) If your modal window requires any parameters you can define them as class variables in the modal component `LoginModalComponent`
```
    export class LoginModalComponent implements OnInit {
        value?: string
        ...
```
7. In the component where you want to call the modal window (in our example the `app.component.ts`) add a contructor parameter
a `BsModalService` object.
```
  constructor(private _modalService: BsModalService) {
  }
```
8. To call the modal window pass the modal component name (`LoginModalComponent`) as a parameter to the `show` method of the `BsModalService` object. 
* Example of calling the modal without parameters:
```
    this._modalService.show(LoginModalComponent);
```
* Example of calling the modal with parameters:
```
    const initialState = {
      value: "some"
    }
    this._modalService.show(LoginModalComponent, {initialState});
```

If you want to load the modal on page load simply call the `show` method in the `ngOnInit` method.

As an alternative you could call the `show` in a function linked to a html event.
