import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {

  constructor(private es: EtudiantService, private router: Router) { }

  ngOnInit(): void {}

  addEtudiant(etudiantData: any) {
    this.es.addEtudiant(etudiantData).subscribe(
      () => {
        // Handle a successful response (status code 200) here
        this.router.navigate(['listEtudiant']);
      },
      (error: HttpErrorResponse) => {
        // Handle the error here
        if (error.status === 200) {
          // Consider a status code of 200 as success and navigate
          this.router.navigate(['listEtudiant']);
        } else {
          console.error('Error adding Etudiant:', error);
          // Handle the error as needed, e.g., display an error message to the user
        }
      }
    );
  }
}
