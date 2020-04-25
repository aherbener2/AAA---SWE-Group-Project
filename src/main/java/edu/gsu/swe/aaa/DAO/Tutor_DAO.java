package edu.gsu.swe.aaa.DAO;

import java.util.List;

import edu.gsu.swe.aaa.model.Tutor;

public interface Tutor_DAO {

    public boolean saveTutor(Tutor tutor);
    public List<Tutor> getTutors();
    public List<Tutor> getTutorById(Tutor tutor);
    public boolean updateTutor(Tutor tutor);
}