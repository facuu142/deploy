package com.c1646njava.tuvivienda.services.implementation;

import com.c1646njava.tuvivienda.models.comment.DTO.commentRequest;
import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.repositories.PostRepository;
import com.c1646njava.tuvivienda.repositories.UserRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import com.c1646njava.tuvivienda.repositories.commentRepository;
import com.c1646njava.tuvivienda.models.comment.DTO.commentMapper;
import com.c1646njava.tuvivienda.exceptions.PostExceptions.postNotFoundException;

import java.util.List;

@Service
public class commentService {
    private commentRepository commentRepository;
    private PostRepository postRepository;
    private UserRepository userRepository;
    private commentMapper commentMapper;
    private AuthService authService;

    public commentService(com.c1646njava.tuvivienda.repositories.commentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }


    public comment addComment(commentRequest commentRequest) throws postNotFoundException {
        //find post
        Post post = postRepository.findById(commentRequest.postId())
                .orElseThrow(() -> new postNotFoundException(commentRequest.postId().toString()));

        //put in the comment the post entity and the user entity
        comment comment = commentMapper.map(commentRequest, post, authService.getCurrentUser());

        return commentRepository.save(comment);



    }

    public Page<comment> getAll(Long postId, Pageable pageable) throws postNotFoundException {
        Post post = postRepository.findById(postId).orElseThrow(() -> new postNotFoundException(postId.toString()));
        return commentRepository.findAllByPost_id(postId,pageable);


    }
}
