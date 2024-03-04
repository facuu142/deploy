package com.c1646njava.tuvivienda.repositories;

import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.models.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface commentRepository extends JpaRepository<comment, Long>, JpaSpecificationExecutor<comment> {

    Page<comment> findByPost(Post post, Pageable pageable);

    Page<comment> findByUser(User user, Pageable pageable);
}
