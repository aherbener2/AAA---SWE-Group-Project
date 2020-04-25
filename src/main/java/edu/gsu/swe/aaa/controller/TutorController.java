package edu.gsu.swe.aaa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.gsu.swe.aaa.model.Tutor;
import edu.gsu.swe.aaa.service.TutorService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class TutorController {
    @Autowired
    private TutorService tutorService;

    @PostMapping("save-tutor")
    public boolean saveTutor(@RequestBody Tutor tutor) {
        return tutorService.saveTutor(tutor);
    }

    @GetMapping("tutor-list")
    public List<Tutor> allTutors() {
        return tutorService.getTutors();
    }
    
    @GetMapping("tutor/{pantherId}")  
    public List<Tutor> alltutorByID(@PathVariable("pantherId") String pantherId,Tutor tutor) {  
         tutor.setPantherId(pantherId);  
         return tutorService.getTutorById(tutor);
          
    }  
      
    @PostMapping("update-student/{pantherId}")  
    public boolean updateTutor(@RequestBody Tutor tutor,@PathVariable("pantherId") String pantherId) {  
        tutor.setPantherId(pantherId);  
        return tutorService.updateTutor(tutor);  
    }  

}