package com.c1646njava.tuvivienda.models.user.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public record RequestLogin(@NotBlank(message = "Email is required")
                           @Email(message = "Email must be valid")
                           String email,
                           @NotBlank(message = "Password is required")
                           String password) {
}
