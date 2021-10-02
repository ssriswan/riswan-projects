package com.maliq.pizzaordering;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PizzaController {

	@Autowired
	PizzaRepository pizzaRepository;

	@RequestMapping(value = "/getAllPizza", method = RequestMethod.GET)
	// @GetMapping("/getAllPizza")
	public List<Pizza> getAllPizza() {
		List<Pizza> list = pizzaRepository.findAll();

		return list;
	}

	@RequestMapping(value = "/savePizza", method = RequestMethod.POST)
	// @PostMapping("/savePizza")
	public Pizza insertPizza(@RequestBody Pizza pizza) {
		System.out.println(pizza);
		Pizza newEntry = pizzaRepository.save(pizza);
		return newEntry;
	}
}
