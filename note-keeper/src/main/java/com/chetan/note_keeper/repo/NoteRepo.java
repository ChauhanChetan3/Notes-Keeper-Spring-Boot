package com.chetan.note_keeper.repo;

import com.chetan.note_keeper.model.Notes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:3000")
public interface NoteRepo extends JpaRepository <Notes,Integer>{
}
