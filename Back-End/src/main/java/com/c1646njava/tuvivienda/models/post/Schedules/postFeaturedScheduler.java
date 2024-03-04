package com.c1646njava.tuvivienda.models.post.Schedules;

import com.c1646njava.tuvivienda.models.post.Post;
import com.c1646njava.tuvivienda.repositories.PostRepository;
import com.c1646njava.tuvivienda.services.abstraction.PostService;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
@AllArgsConstructor
public class postFeaturedScheduler {
    private PostService postService;
    private PostRepository postRepository;

    //It will be executed 0 seg, 0 minutes, 0 hours, every day, every month, every year
    @Scheduled(cron = "0 0 0 * * *")
    public void checkFeaturedPost(){
        List<Post> posts = postService.getAllFeaturedPost();
        LocalDate currentDate = LocalDate.now().minusDays(30);
        for(Post post : posts){
            if(post.getFeaturedDate().isBefore(currentDate)){
                post.setFeatured(0);
                post.setFeaturedDate(null);
                postRepository.save(post);
            }
        }
    }
}
