package com.c1646njava.tuvivienda.models.post.DTO;

import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.image.ImagePost;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class postResponse{

    private Long id;
    private String name;
    private String description;
    private String type;
    private Integer bedrooms;
    private String address;
    private String contractType;
    private Long price;
    private float area;
    private int bathrooms;
    private int age;
    private String country;
    private String state;
    private List<ImagePost> images;
    private int featured;
    private Long administrator_id;
    private List<comment> comments;
}
