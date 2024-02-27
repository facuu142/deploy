package com.c1646njava.tuvivienda.controllers.Abstraction;

import com.c1646njava.tuvivienda.exceptions.PostExceptions.entityCreationException;
import com.c1646njava.tuvivienda.exceptions.PostExceptions.postNotFoundException;
import com.c1646njava.tuvivienda.models.post.DTO.FilterDTO;
import com.c1646njava.tuvivienda.models.post.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

public interface PostControllerA {


    public ResponseEntity<Page<Post>> getByFilter(@RequestBody List<FilterDTO> filterDTOList, @SortDefault(sort = "id", direction = Sort.Direction.DESC)  @PageableDefault(page = 0, size = 10) Pageable pageable) throws postNotFoundException;
    ResponseEntity<Post> createPost( @Valid @RequestBody Post post) throws entityCreationException, MethodArgumentNotValidException; //cambiar response x post
    ResponseEntity<Post> getById(@PathVariable("id") Long id) throws postNotFoundException;

    ResponseEntity<Post> putById(@PathVariable("id") Long id, @Valid @RequestBody Post post)  throws postNotFoundException, MethodArgumentNotValidException;

    ResponseEntity<String> deletePost(@PathVariable("id") Long id) throws postNotFoundException;

    ResponseEntity<Post> patchPost(@PathVariable("id") Long id, @Valid @RequestBody Post fields) throws postNotFoundException, MethodArgumentNotValidException, IllegalAccessException;

    ResponseEntity<Page<Post>> getAll(@SortDefault("id,asc") @PageableDefault(page = 0, size = 10) Pageable pageable) ;
}