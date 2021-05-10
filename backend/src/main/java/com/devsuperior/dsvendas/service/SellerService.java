package com.devsuperior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*Você basicamente criou uma interface chamada SellerRepository(que herda o jpaRepository:
 cria todas as funções que podem ser usadas no banco de dados) e
instanciou ela aqui para poder fazer acesso ao banco de dados na camada
de serviços

*/
@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    // Rever trexo de aula.
    public List<SellerDTO> findAll() {
        List<Seller> result = repository.findAll();

        return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
    }

}
