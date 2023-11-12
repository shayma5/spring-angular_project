import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent {
  etudiants: any;

  constructor(private es: EtudiantService,private ac:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.es.getAllData().subscribe((response) => {this.etudiants = response})

    this.es.deleteEtudiant(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['listEtudiant'])
    )

  }
   delete(id:any)
   {
    this.es.deleteEtudiant(id).subscribe(()=>{
       // this.es.getAllData().subscribe((response) => {this.etudiants = response})
      this.etudiants= this.etudiants.filter((etudiant:any)=>etudiant.idEtudiant!=id)
    },error =>{
      console.log(error);
    });


   }
}
