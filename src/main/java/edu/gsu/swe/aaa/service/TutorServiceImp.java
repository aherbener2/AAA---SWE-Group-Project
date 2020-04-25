package edu.gsu.swe.aaa.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.gsu.swe.aaa.DAO.Tutor_DAO;
import edu.gsu.swe.aaa.model.Tutor;

@Service
@Transactional
public class TutorServiceImp implements TutorService {
    @Autowired
    private Tutor_DAO tutordao;

    @Override
    public boolean saveTutor(Tutor tutor) {
        return tutordao.saveTutor(tutor);
    }

    @Override
    public List<Tutor> getTutors() {
        return tutordao.getTutors();
    }

    @Override
    public List<Tutor> getTutorById(Tutor tutor) {
        return tutordao.getTutorById(tutor);
    }

    @Override
    public boolean updateTutor(Tutor tutor) {
        return tutordao.updateTutor(tutor);
    }

    
}