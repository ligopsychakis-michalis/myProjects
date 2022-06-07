import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.formBuilder.group({
    email: "",
    name: ""
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    alert(`Thank you ${this.contactForm.value.name}!\nWe will send you as soon as possible on ${this.contactForm.value.email}\nCheers !!!`)
    this.contactForm.reset();
  }
}
