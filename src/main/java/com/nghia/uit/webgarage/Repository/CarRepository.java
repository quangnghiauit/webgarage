package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Car;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends CrudRepository<Car, Integer> {
}
