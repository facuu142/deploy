package com.c1646njava.tuvivienda.utils;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class createdDate implements Serializable {

    @CreatedDate
    @Column(name = "createdDate", nullable = false, updatable = false)
    private Long createDate;


    @LastModifiedDate
    @Column(name = "lastModifiedDate")
    private Long lastModifiedDate;

}
