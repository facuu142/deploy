package com.c1646njava.tuvivienda.models.comment.DTO;

import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.DTO.FilterDTO;
import com.c1646njava.tuvivienda.models.post.Post;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class commentSpecification {
    public static Specification<comment> columnEqual(Long postId)
    {
        return new Specification<comment>()
        {
            private static final long serialVersionUID = 1L;


            public Predicate toPredicate(Root<comment> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder)
            {

                Predicate predicate = criteriaBuilder.equal(root.get("post"), postId);

                return predicate;
            }
        };

    }



}
