package com.c1646njava.tuvivienda.controllers;

import com.c1646njava.tuvivienda.models.user.exceptions.PostExceptions.postNotFoundException;
import com.c1646njava.tuvivienda.models.administrator.Administrator;
import com.c1646njava.tuvivienda.models.user.User;
import com.c1646njava.tuvivienda.models.user.dto.RequestLogin;
import com.c1646njava.tuvivienda.models.user.dto.RequestUser;
import com.c1646njava.tuvivienda.models.user.dto.ResponseUser;
import com.c1646njava.tuvivienda.repositories.UserRepository;
import com.c1646njava.tuvivienda.services.implementation.UserServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {

    private final UserServiceImp userServiceImp;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody RequestUser requestUser) {
        try {
            User user = userServiceImp.registerUser(requestUser);

            return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseUser(user));
        }catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@RequestBody RequestLogin requestLogin) throws AuthenticationException {
         try{
             User user = userServiceImp.loginUser(requestLogin.email(),requestLogin.password());
             return ResponseEntity.status(HttpStatus.OK).body(userServiceImp.loginUser(requestLogin.email(),requestLogin.password()));
         }catch (AuthenticationException e){
             return ResponseEntity.status((HttpStatus.UNAUTHORIZED)).body(e.getMessage());
         }
    }

    @PostMapping("/toggle_favorite")
    public ResponseEntity<?> toggleFavorite(@RequestParam Long userId,@RequestParam Long postId) {
        try {
            User user = userRepository.findById(userId)
                .orElseThrow(() -> new AuthenticationException("Invalid email"));
            userServiceImp.toggleFavorite(userId, postId);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (AuthenticationException e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/upgrade_to_admin/")
    public ResponseEntity<?> upgradeToAdmin(@RequestParam Long userId, @RequestParam String phoneNumber) {
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new AuthenticationException("Invalid email"));

            Administrator admin = userServiceImp.upgradeToAdmin(userId, phoneNumber);
            return ResponseEntity.status(HttpStatus.OK).body(admin);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            // Handle unexpected errors gracefully
            //mess =
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upgrade user");
        }
    }

    @GetMapping("/adminverify")
    public ResponseEntity<Boolean> verifyAdmin(@RequestParam(name = "postId") Long postId, @RequestParam(name = "userId") Long userId) throws postNotFoundException {
        return ResponseEntity.ok(userServiceImp.isAdmin(postId,userId));

    }




}
