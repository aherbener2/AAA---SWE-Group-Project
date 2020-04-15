package edu.gsu.swe.aaaapp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.relation.RelationNotFoundException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController 
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class TutorController {
    @Autowired
    private TutorRepository tutorRepository;

    @GetMapping("/tutor")
    public List<Tutor> getAllTutors() {
        return tutorRepository.findAll();
    }

    @GetMapping("/tutor/{pantherid}")
    public ResponseEntity<Tutor> getTutorById(@PathVariable(value = "pantherid") String pantherid)
        throws RelationNotFoundException {
        Tutor tutor = TutorRepository.findById(pantherid);

        return ResponseEntity.ok().body(tutor);
    }
    
    @PostMapping("/tutors")
    public Tutor createTutor(@Valid @RequestBody Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    @PutMapping("/tutors/{pantherid}")
    public ResponseEntity<Tutor> updateTutor(@PathVariable(value = "pantherid") String tutorId,
         @Valid @RequestBody Tutor tutorDetails) throws RelationNotFoundException {
        Tutor tutor = TutorRepository.findById(tutorId);


        tutor.setEmail(tutorDetails.getEmail());
        tutor.setLastName(tutorDetails.getLastName());
        tutor.setFirstName(tutorDetails.getFirstName());
        final Tutor updatedTutor = tutorRepository.save(tutor);
        return ResponseEntity.ok(updatedTutor);
    }

    @DeleteMapping("/tutors/{pantherid}")
    public Map<String, Boolean> deleteTutor(@PathVariable(value = "pantherid") String tutorId)
         throws RelationNotFoundException {
        Tutor tutor = TutorRepository.findById(tutorId);


        tutorRepository.delete(tutor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
