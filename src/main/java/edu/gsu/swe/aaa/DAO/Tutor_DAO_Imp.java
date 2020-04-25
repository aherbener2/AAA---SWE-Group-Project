package edu.gsu.swe.aaa.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.gsu.swe.aaa.model.Tutor;

@Repository
public class Tutor_DAO_Imp implements Tutor_DAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public boolean saveTutor(Tutor tutor) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().save(tutor);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;
    }

    @Override
    public List<Tutor> getTutors() {
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Tutor> query = currentSession.createQuery("from Tutor", Tutor.class);
        List<Tutor> list = query.getResultList();
        return list;
    }

    @Override
    public List<Tutor> getTutorById(Tutor tutor) {
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Tutor> query = currentSession.createQuery("from tutor where pantehrId =:pantherId", Tutor.class);
        query.setParameter("pantherId", tutor.getPantherId());
        List<Tutor> list = query.getResultList();

        return list;
    }

    @Override
    public boolean updateTutor(Tutor tutor) {
        boolean status = false;
        try {
            sessionFactory.getCurrentSession().update(tutor);
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

}