import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

  @Input() get counter() {
    return this.innerCounter;
  }
  @Output() counterChange = new EventEmitter();
  set counter(value) {
    this.innerCounter = value;
    this.counterChange.emit(this.innerCounter);
  }
  private innerCounter: number = 0;

  @Input() get lastModification() {
    return this.innerLastModification;
  }
  @Output() lastModificationChange = new EventEmitter();
  set lastModification(value) {
    this.innerLastModification = value;
    this.lastModificationChange.emit(this.innerLastModification);
  }

  private innerLastModification: Date = new Date();

  increaseCounter() {
    this.lastModification = new Date(Date.now());
    this.counter++;
  }

  decreaseCounter() {
    this.lastModification = new Date(Date.now());
    this.counter--;
  }

}
