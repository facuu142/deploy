package com.c1646njava.tuvivienda.models.user.dto;

import com.c1646njava.tuvivienda.models.image.ImageUser;
import com.c1646njava.tuvivienda.models.user.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public record ResponseUser(
        Long id,

        @NotBlank(message = "The name is required")
        @Size(min = 3, max = 50, message = "The name must be between 3 and 50 characters")
        String name,

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        String email,

        String country,

        ImageUser avatar
) {

    public ResponseUser(User user){
        this(user.getId(),
                user.getName(),
                user.getEmail(),
                user.getCountry(),
                user.getAvatar());
    }
}

