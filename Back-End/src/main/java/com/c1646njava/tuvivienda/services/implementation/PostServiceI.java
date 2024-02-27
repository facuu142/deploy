package com.c1646njava.tuvivienda.services.implementation;

import com.c1646njava.tuvivienda.DTO.Patcher.Patcher;
import com.c1646njava.tuvivienda.exceptions.PostExceptions.entityCreationException;
import com.c1646njava.tuvivienda.exceptions.PostExceptions.postNotFoundException;
import com.c1646njava.tuvivienda.models.post.DTO.FilterDTO;
import com.c1646njava.tuvivienda.models.post.DTO.PostSpecification;
import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.repositories.PostRepository;
import com.c1646njava.tuvivienda.services.abstraction.PostService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceI implements PostService {


    private PostRepository postrepositorio;
    private Patcher patcher;

    public PostServiceI(PostRepository postrepositorio, Patcher patcher) {
        this.postrepositorio = postrepositorio;
        this.patcher = patcher;
    }

    @Override
    public List<Post> searchByLocation(String address) throws postNotFoundException {
        Optional<List<Post>> listaposts = postrepositorio.searchByLocation(address);
        if(listaposts.isPresent()){
            return listaposts.get();
        }else{
            throw new postNotFoundException("No hay publicaciones con la dirección: " + address);

        }
    }

    @Override
    public List<Post> searchByType(String type) throws postNotFoundException {
        Optional<List<Post>> listaposts = postrepositorio.searchByType(type);
        if(listaposts.isPresent()){
            return listaposts.get();
        }else{
            throw new postNotFoundException("No hay publicaciones de tipo: " + type);

        }

    }

    @Override
    public List<Post>  searchByBedrooms(Integer bedrooms1) throws postNotFoundException{
        Optional<List<Post>> listaposts = postrepositorio.searchByBedrooms(bedrooms1);
        if(listaposts.isPresent()){
            return listaposts.get();
        }else{
            throw new postNotFoundException("No hay publicaciones con " + bedrooms1 + " habitaciones");

        }
    }

    @Override
    public List<Post> searchByPrice(Long priceLow, Long PriceHigh) throws postNotFoundException {
        Optional<List<Post>> listaposts = postrepositorio.searchByPrice(priceLow,PriceHigh);
        if(listaposts.isPresent()){
            return listaposts.get();
        }else{
            throw new postNotFoundException("No hay publicaciones dentro de ese rango de precios ");

        }
    }



    public Page<Post> searchByFilter(List<FilterDTO> filterDtoList, Pageable pageable){
        return postrepositorio.findAll(PostSpecification.columnEqual(filterDtoList),pageable);

    }

    public Post crearPost(Post post) throws entityCreationException{
        postrepositorio.save(post);
        Optional<Post> posteo = postrepositorio.findById(post.getId());

        if(posteo.isPresent()){
            return posteo.get();
        }else{
            throw new entityCreationException("the entity was not persisted correctly");
        }
    }

    @Override
    public Post findById(Long id) throws postNotFoundException {
        Optional<Post> posteo = postrepositorio.findById(id);
        if(posteo.isPresent()){
            return posteo.get();
        }else{
            throw new postNotFoundException("there isn't a post with the id: " + id);
        }
    }

    @Override
    public String deleteById(Long id) throws postNotFoundException {
        Optional<Post> posteo = postrepositorio.findById(id);
        if(posteo.isPresent()){
            postrepositorio.deleteById(id);
            return "Post eliminado";
        }else{
            throw new postNotFoundException("there isn't a post with the id: " + id);
        }

    }

    @Override
    public Post putById(Long id, Post post) throws postNotFoundException {
        Optional<Post> posteo = postrepositorio.findById(id);
        if(posteo.isPresent()){
            Post postinner = posteo.get();
            BeanUtils.copyProperties(post,postinner, "id");
            postrepositorio.save(post);
            return post;
        }else{
            throw new postNotFoundException("there isn't a post with the id: " + id);
        }
    }

    @Override
    public Post patchById(Long id,  Post fields) throws postNotFoundException, IllegalAccessException {
        Optional<Post> posteoOptional = postrepositorio.findById(id);

        if(posteoOptional.isPresent()){
            try {
                Post postExistente = posteoOptional.get();
                Patcher.postPatcher(postExistente, fields);
                postrepositorio.save(postExistente);
                return postExistente;
            }catch(IllegalAccessException e){
                throw new IllegalAccessException("Issue trying to execute reflexivity in Post class");
            }
        }else{
            throw new postNotFoundException("there isn't a post with the id: " + id);

        }
    }

    @Override
    public Page<Post> getAll( Pageable pageable){
        return postrepositorio.findAll(pageable);
    }











}