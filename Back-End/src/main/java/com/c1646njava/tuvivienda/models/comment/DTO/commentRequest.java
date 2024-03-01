package com.c1646njava.tuvivienda.models.comment.DTO;

import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.models.user.User;
import jakarta.persistence.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record commentRequest(
        @NotBlank
        String content,
        @NotNull
        Long postId
) {
}
