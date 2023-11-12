import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

const routes: Routes = [
   {path:"login", component:LoginComponent},
   {path:"register", component:RegisterComponent},
   {path:"listEtudiant", component:ListEtudiantComponent},
   {path:"new", component:AddEtudiantComponent},
   {path:"update/:param", component:UpdateEtudiantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
