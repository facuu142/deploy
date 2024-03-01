package com.c1646njava.tuvivienda.DTO.Patcher;

import com.c1646njava.tuvivienda.models.post.Post;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;

@Component
public class Patcher {
    public static void postPatcher(Post existingIntern, Post incompleteIntern) throws IllegalAccessException {

        Class<?> postClass= Post.class;
        Field[] postFields=postClass.getDeclaredFields();
        for(Field field : postFields){
            //Private to public
            field.setAccessible(true);

            Object value=field.get(incompleteIntern);
            if(value!=null){
                field.set(existingIntern,value);
            }
            //Private to public
            field.setAccessible(false);
        }

    }

}



