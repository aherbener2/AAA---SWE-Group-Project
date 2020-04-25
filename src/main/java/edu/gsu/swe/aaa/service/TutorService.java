package edu.gsu.swe.aaa.service;

import java.util.List;

import edu.gsu.swe.aaa.model.Tutor;

public interface TutorService {
    public boolean saveTutor (Tutor tutor);
    public List<Tutor> getTutors();
    public List<Tutor> getTutorById(Tutor tutor);
    public boolean updateTutor(Tutor tutor);

}