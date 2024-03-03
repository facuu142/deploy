package com.c1646njava.tuvivienda.services.implementation;

import com.c1646njava.tuvivienda.models.comment.DTO.commentRequest;
import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.models.user.User;
import com.c1646njava.tuvivienda.repositories.PostRepository;
import com.c1646njava.tuvivienda.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import com.c1646njava.tuvivienda.repositories.commentRepository;
import com.c1646njava.tuvivienda.models.comment.DTO.commentMapper;
import com.c1646njava.tuvivienda.exceptions.PostExceptions.postNotFoundException;

import javax.naming.AuthenticationException;
import java.util.Optional;

@Service
@AllArgsConstructor
public class commentService {
    private commentRepository commentRepository;
    private PostRepository postRepository;
    private UserRepository userRepository;
    private UserServiceImp userServiceImp;
    private commentMapper commentMapper;




    public comment addComment(commentRequest commentRequest) throws postNotFoundException, AuthenticationException {
        //find post
        Post post = postRepository.findById(commentRequest.postId())
                .orElseThrow(() -> new postNotFoundException(commentRequest.postId().toString()));

        //put in the comment the post entity and the user entity
        comment comment = commentMapper.map(commentRequest, post, userServiceImp.getCurrentUser(commentRequest.email()));

        return commentRepository.save(comment);}





    public Page<comment> getAllByPost(Long postId, Pageable pageable) throws postNotFoundException {
        Post post = postRepository.findById(postId).orElseThrow(() -> new postNotFoundException(postId.toString()));
        return commentRepository.findByPost(post,pageable);
    }

    public Page<comment> getAllByUser(Long userId, Pageable pageable) {
        Optional<User> user = userRepository.findById(userId);
        return commentRepository.findByUser(user.get(),pageable);
    }


}
