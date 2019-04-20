package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Roles;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Roles, Integer> {

    @Query(value = "select * from roles as r where r.role =?1", nativeQuery = true)
    Roles findByRole(String role);
}
