import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  iconUrl = input<string | null>(null);
  type = input<'text' | 'email'>('text');
  placeholder = input('');
  disabled = input<boolean>(false);

  @Input() value = '';

  @Output() controlValue: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.controlValue.emit(this.value);
  }
}
