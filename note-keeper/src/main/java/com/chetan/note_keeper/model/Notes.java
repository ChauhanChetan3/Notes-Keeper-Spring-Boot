package com.chetan.note_keeper.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
public class Notes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int nid;
    private String title;
    private String content;
}
