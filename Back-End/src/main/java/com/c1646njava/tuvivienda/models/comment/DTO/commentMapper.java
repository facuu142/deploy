package com.c1646njava.tuvivienda.models.comment.DTO;
import com.c1646njava.tuvivienda.models.comment.comment;
import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.models.user.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


@Mapper(componentModel = "spring")
public interface commentMapper {
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "text", source = "commentRequest.content")
    @Mapping(target = "post", source = "post")
    @Mapping(target = "user", source = "user")
    comment map(commentRequest commentRequest, Post post, User user);



}
