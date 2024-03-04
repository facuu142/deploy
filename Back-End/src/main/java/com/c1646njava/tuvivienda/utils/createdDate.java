package com.c1646njava.tuvivienda.utils;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class createdDate implements Serializable {

    @CreatedDate
    //YYYY-MM-DD
    @Column(name = "createdDate", nullable = false, updatable = false)
    protected LocalDate createDate;


    @LastModifiedDate
    //YYYY-MM-DD
    @Column(name = "lastModifiedDate")
    protected LocalDate lastModifiedDate;

}
