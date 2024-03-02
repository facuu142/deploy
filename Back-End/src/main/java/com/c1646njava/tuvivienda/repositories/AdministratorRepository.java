package com.c1646njava.tuvivienda.repositories;

import com.c1646njava.tuvivienda.models.administrator.Administrator;
import com.c1646njava.tuvivienda.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface AdministratorRepository extends JpaRepository<Administrator, Long> {
    Administrator findByUser_id(Long userId);
}
