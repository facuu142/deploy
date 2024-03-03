package com.c1646njava.tuvivienda.controllers;

import com.c1646njava.tuvivienda.exceptions.PostExceptions.postNotFoundException;
import com.c1646njava.tuvivienda.models.comment.DTO.commentRequest;
import com.c1646njava.tuvivienda.models.comment.comment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.c1646njava.tuvivienda.services.implementation.commentService;

import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/comment")
public class commentController {

    private commentService commentService;

    public commentController(commentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/add")
    public ResponseEntity<comment> addComment(@RequestBody commentRequest commentRequest) throws postNotFoundException, AuthenticationException {
            return ResponseEntity.ok(this.commentService.addComment(commentRequest));
    }

    @GetMapping("/getAll/{postId}")
    public ResponseEntity<Page<comment>> getAll(@PathVariable(value = "postId",required = true) Long postId, @PageableDefault(page = 0, size = 10) Pageable pageable ) throws postNotFoundException {
        return ResponseEntity.ok(this.commentService.getAllByPost(postId, pageable));
    }

    @GetMapping("/getAllByUser/{userId}")
    public ResponseEntity<Page<comment>> getAllByUser(@PathVariable(value = "userId",required = true) Long userId, @PageableDefault(page = 0, size = 10) Pageable pageable ) throws postNotFoundException {
        return ResponseEntity.ok(this.commentService.getAllByUser(userId, pageable));
    }



}
