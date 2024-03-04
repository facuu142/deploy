package com.c1646njava.tuvivienda.models.comment.DTO;

import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.models.user.User;
import org.springframework.stereotype.Component;

@Component
public class commentMapperImpl implements commentMapper{

    @Override
    public comment map(commentRequest commentRequest, Post post, User user) {
        comment comment = new comment();
        comment.setContent(commentRequest.content());
        comment.setPost(post);
        comment.setUser(user);
        return comment;
    }


}
