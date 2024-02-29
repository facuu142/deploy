package com.c1646njava.tuvivienda.models.post.DTO;

import com.c1646njava.tuvivienda.models.post.Post;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;


public class PostSpecification {

    public static Specification<Post> columnEqual(List<FilterDTO> filterDTOList)
    {
        return new Specification<Post>()
        {
            private static final long serialVersionUID = 1L;

            @Override
            public Predicate toPredicate(Root<Post> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder)
            {
                List<Predicate> predicates = new ArrayList<>();
                filterDTOList.forEach(filter -> {
                    //Create the query with root.get(param1) == root.get(param2)
                    Predicate predicate = criteriaBuilder.equal(root.get(filter.getColumnName()), filter.getColumnValue());
                    //add each conditions to a list of conditions
                    predicates.add(predicate);
                });
                // convert list predicates in an array of type Predicate
                // predicate1 AND predicate 2 AND ... predicate n
                return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
            }
        };
    }
}










