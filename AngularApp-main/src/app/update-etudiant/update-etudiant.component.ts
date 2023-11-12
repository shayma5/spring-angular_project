import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Etudiant } from '../model/Etudiant';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent {

  idEtudiant!:Number;
  etudiant!:Etudiant;
  updateForm!:FormGroup;

  constructor(private actRoute:ActivatedRoute,private es: EtudiantService, private router: Router) { }

  ngOnInit(): void {
    this.getParam();
    this.es.getIdEtudiant(this.idEtudiant).subscribe((data)=>{this.etudiant=data

      this.updateForm=new FormGroup({
        idEtudiant:new FormControl(this.etudiant.idEtudiant),
        nomEt:new FormControl(this.etudiant.nomEt),
        prenomEt:new FormControl(this.etudiant.prenomEt),
        ecole:new FormControl(this.etudiant.ecole),
        cin:new FormControl(this.etudiant.cin),
        dateNaissance:new FormControl(this.etudiant.dateNaissance)
      });
      console.log(this.etudiant);
    });
  }

  update(){
    if (this.updateForm.valid) {
    this.es.updateEtudiant(this.idEtudiant,this.etudiant).subscribe(
      ()=>this.router.navigate(['/listEtudiant'])
    )
  }
}

  getParam(){
    //this.id= Number( this.actR.snapshot.paramMap.get('param'));
    this.actRoute.paramMap.subscribe(data => this.idEtudiant=Number(data.get('param')));
   }
  

}