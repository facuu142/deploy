package com.c1646njava.tuvivienda.models.comment.DTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record commentRequest(
        @NotBlank
        String content,
        @NotNull
        Long postId,
        @NotNull
        Long userId
) {
}
