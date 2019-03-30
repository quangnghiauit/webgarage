package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {


    @Query(value = "select * from users", nativeQuery = true)
    List<Users> findAllByFilter();
}
