import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/Etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://localhost:3031';
  constructor(private httpClient:HttpClient) { }


  getAllData(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]> ('http://localhost:3031/etudiant/getAll');
  }

  addEtudiant(etudiant: any) {
         return this.httpClient.post('http://localhost:3031/etudiant/new ', etudiant)
      }


  deleteEtudiant(id:any) {
    return this.httpClient.delete('http://localhost:3031/etudiant/delete/'+id);
  }

  updateEtudiant(id:any,etudiant: any ) {
    return this.httpClient.put('http://localhost:3031/etudiant/update/'+id, etudiant);
  }

  getIdEtudiant(id:any ) {
    return this.httpClient.get('http://localhost:3031/etudiant/getId/'+id);
  }
}
