import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
})
export class UserCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit
{
  @Input() name:string = ''
  @Input() email:string = ''
  @Output() sendData = new EventEmitter()
  @ViewChild('buttonTest', { static: false }) buttonTest!: ElementRef
  @ViewChild('buttonShow', { static: true }) buttonShow!: ElementRef
  password: string = "password";
  showButton:boolean = true

  constructor() {
    //console.log("user card constructor");
  }

  ngOnInit(): void {
    console.log("user card on init");
    this.buttonShow.nativeElement.textContent = 'button Show in OnInit'
  }
  ngOnDestroy(): void {
    //console.log("user card Destroy");  
  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log("CHANGES:", changes);

    this.password =
      changes["name"].currentValue +
      " " +
      changes["email"].currentValue +
      " PASSWORD";
  }

  ngDoCheck(): void {
    //console.log("DO CHECK user card"); 
   }

  ngAfterContentInit(): void {
    //console.log("NG AFTER CONTENT INIT");
   }

   ngAfterViewInit(): void {
    //console.log('NG AFTER VIEW INIT')
    //console.log('BUTTON TEST', this.buttonTest)   
    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent = 'button Test in OnInit'
    }
  }

  ngAfterContentChecked(): void {
    //console.log('AFTER CONTENT CHECKED')
  }

  ngAfterViewChecked(): void {
    //console.log('NG AFTER VIEW CHECKED')
  }

  public onSendData() {
    //console.log('onSendData in child')
    this.sendData.emit("Hi from child component");
  }
}