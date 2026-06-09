import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum EPasswordInputIcons {
  Opened = 'icons/eye_opened.svg',
  Closed = 'icons/eye_closed.svg',
}

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent {
  buttonIcon = EPasswordInputIcons.Closed;

  @Input() iconUrl: string | null = null;
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() value = '';
  @Output() controlValue: EventEmitter<string> = new EventEmitter<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.controlValue.emit(this.value);
  }

  onButtonToggleClick() {
    if (this.type === 'password') {
      this.type = 'text';
      this.buttonIcon = EPasswordInputIcons.Opened;
    } else {
      this.type = 'password';
      this.buttonIcon = EPasswordInputIcons.Closed;
    }
  }
}
