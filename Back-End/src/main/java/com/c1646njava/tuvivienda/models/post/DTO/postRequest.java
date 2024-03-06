package com.c1646njava.tuvivienda.models.post.DTO;

import com.c1646njava.tuvivienda.models.image.ImagePost;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public record postRequest (
        @NotBlank(message = "the property's name must be provided")
        String name,
        @NotBlank(message = "the property's description must be provided")
        String description,
        @NotBlank(message = "the property's type must be provided")
        String type,
        @NotNull(message = "the property's bedrooms number must be provided")
        Integer bedrooms,
        @NotBlank(message = "the property's address must be provided")
        String address,
        @NotBlank(message = "the property's contract_type must be provided")
        String contract_type,
        @NotNull(message = "the property's price must be provided")
        Long price,
        @NotNull(message = "the property's area must be provided")
        float area,
        @NotNull(message = "the property's bathrooms number must be provided")
        int bathrooms,
        @NotNull(message = "the property's age must be provided")
        int age,
        @NotBlank(message = "the property's country must be provided")
        String country,
        @NotBlank(message = "the property's state must be provided")
        String state,
        @NotNull(message = "the property's adminId must be provided")
        Long adminId
) {
}
