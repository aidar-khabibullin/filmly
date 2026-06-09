import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterViewInit {
  @Input() isDisabled = false;
  @Output() btnClick = new EventEmitter<void>();
  @ContentChild('buttonContent') btnRef: ElementRef | undefined;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.btnRef);
  }

  onBtnClick(): void {
    this.btnClick.emit();
  }
}
