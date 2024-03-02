package com.c1646njava.tuvivienda.repositories;

import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface commentRepository extends JpaRepository<comment, Long> {


    List<comment> findByPost(Post post);

    Page<comment> findAllByPost_id(Long postId, Pageable pageable);
}
