import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-utilisateur',
  templateUrl: './form-utilisateur.component.html',
  styleUrls: ['./form-utilisateur.component.css'],
})
export class FormUtilisateurComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  profileForm = this.formBuilder.group({
    nom: [''],
    prenom: [''],
    numtel: [''],
    datenaissance: [''],
    ville: [''],
    cv: [''],
  });

  ngOnInit(): void {}
}
