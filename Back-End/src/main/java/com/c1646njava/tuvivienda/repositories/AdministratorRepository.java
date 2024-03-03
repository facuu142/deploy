package com.c1646njava.tuvivienda.repositories;

import com.c1646njava.tuvivienda.models.administrator.Administrator;
import com.c1646njava.tuvivienda.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministratorRepository extends JpaRepository<Administrator, Long> {
    @Query("SELECT a FROM Administrator a WHERE a.user.id = :user_Id")
    Administrator findByUser_id(Long user_Id);
}
