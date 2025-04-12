import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-signalement',
  standalone: false,
  templateUrl: './signalement.component.html',
  styleUrl: './signalement.component.scss'
})
export class SignalementComponent {
  contactForm!: FormGroup;
  spotsNames: string[] = [];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  @Input() set spotsNamesInput(names: string[]) {
    this.spotsNames = names;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Message envoyé', response);
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi', error);
        }
      });
    }
  }
}
