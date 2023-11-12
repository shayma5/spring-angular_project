package tn.esprit.twin1.SpringMe.services;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import tn.esprit.twin1.SpringMe.entities.Etudiant;
import tn.esprit.twin1.SpringMe.repositories.EtudiantRepositorie;

import java.util.List;
import java.util.Optional;

@Service
public class EtudiantServiceImpl  implements EtudiantService{

    @Autowired
    private EtudiantRepositorie etudiantRepositorie ;

    @Override
    public List<Etudiant> getAllStudents() {
        return etudiantRepositorie.findAll();
    }

    @Override
    public void deleteEtudiant(long idEtudiant) {
        etudiantRepositorie.deleteById(idEtudiant);

    }


    @Override
    public Etudiant findById(long idEtudiant) {
        return etudiantRepositorie.findById(idEtudiant).get();
    }

    @Override
    public Etudiant saveEtudiant(Etudiant etudiant) {
        return etudiantRepositorie.save(etudiant);

    }

    @Override
    public Etudiant updateEtudiant(long idEtudiant, Etudiant updatedEtudiant) {
        System.out.println("before fetching");

        Etudiant etudiant = etudiantRepositorie.findById(idEtudiant).orElse(null);
        System.out.println("after fetching");
        System.out.println(etudiant);

        etudiant.setNomEt(updatedEtudiant.getNomEt());
        etudiant.setPrenomEt(updatedEtudiant.getPrenomEt());
        etudiant.setEcole(updatedEtudiant.getEcole());
        etudiant.setDateNaissance(updatedEtudiant.getDateNaissance());
        etudiant.setCin(updatedEtudiant.getCin());

        return  etudiantRepositorie.save(etudiant);
    }


}
