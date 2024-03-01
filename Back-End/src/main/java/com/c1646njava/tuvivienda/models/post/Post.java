package com.c1646njava.tuvivienda.models.post;

import java.util.ArrayList;
import java.util.List;

import com.c1646njava.tuvivienda.models.administrator.Administrator;
import com.c1646njava.tuvivienda.models.image.ImagePost;
import com.c1646njava.tuvivienda.models.user.User;
import jakarta.persistence.*;


import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import com.c1646njava.tuvivienda.utils.createdDate;

@Entity
@Data
@NoArgsConstructor
@Table(name = "post")
public class Post extends createdDate{

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //InDTO
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "bedrooms")
    private Integer bedrooms;

    @Column(name = "address")
    private String address;


    @Column(name="contract_type")
    private String contract_type;

    @Column(name = "price")
    private Long price;

    @Column(name="area")
    private float area;

    @Column(name="bathrooms")
    private int bathrooms;

    @Column(name="property_age")
    private int age;

    @Column(name="country")
    private String country;

    @Column(name="state")
    private String state;

    @OneToMany
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    private List<ImagePost> image;


    //EXTERNAL
    @Column(name = "comments")
    private String comments = null;

    //advertising payment
    @Column(name="outstanding")
    private boolean outstanding = false;


    //fav function
    @ManyToMany
    @JoinTable(name = "user_favorites",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> fav = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "administrator_id", referencedColumnName = "id")
    private Administrator administrator;







}
