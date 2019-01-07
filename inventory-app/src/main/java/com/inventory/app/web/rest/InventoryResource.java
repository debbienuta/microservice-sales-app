package com.inventory.app.web.rest;



import com.inventory.app.domain.Product;
import com.inventory.app.domain.StockItem;
import com.inventory.app.repository.ProductRepository;
import com.inventory.app.repository.StockItemRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.web.bind.annotation.*;


import java.util.Optional;


/**
 * InventoryControllerResource controller
 */
@RestController
@RequestMapping("/api/inventory-controller")
public class InventoryResource {

    private ProductRepository productRepository;

    private StockItemRepository stockItemRepository;

    public InventoryResource(ProductRepository productRepository, StockItemRepository stockItemRepository) {

        this.stockItemRepository = stockItemRepository;
        this.productRepository = productRepository;
    }


    private final Logger log = LoggerFactory.getLogger(InventoryResource.class);

    /**
     * GET getProduct
     */
    @GetMapping("/get-product/{barcode}")
    public Product getProduct(@PathVariable String barcode) {
        return productRepository.findByBarcode(barcode);
    }

    @GetMapping("/verify-item/{id}")
    public Boolean verifyItem(@PathVariable Long id) {

        if (!productRepository.findById(id).isPresent())
            return false;
        else
            return true;
    }


    /**
     * POST updateStock
     */

    @PostMapping("/update-stock/{productId}/{amount}")
    public Boolean updateStock(@PathVariable Long productId, @PathVariable Integer amount) {
        Optional<Product> repoResponse = productRepository.findById(productId);
        if (repoResponse.isPresent()) {
            Product product = repoResponse.get();
            Optional<StockItem> repoStackResponse = stockItemRepository.findById(product.getStockItem().getId());
            if (repoStackResponse.isPresent()) {
                StockItem stockItem = repoStackResponse.get();
                if (stockItem.getNumberOfProducts() > amount) {
                    stockItem.setNumberOfProducts(product.getStockItem().getNumberOfProducts() - amount);
                } else {
                    stockItem.setNumberOfProducts(0);
                }
                stockItemRepository.save(stockItem);
                return true;
            }
        }
        return false;
    }

    @DeleteMapping("/remove-product/{id}")
    public Boolean removeProduct(@PathVariable Long id) {
        if (!productRepository.findById(id).isPresent()) {
            return false;
        }

        productRepository.deleteById(id);
        return true;
    }

    /**
     * GET verifyProductStock
     */
    @GetMapping("/verify-product-stock/{barcode}")
    public Boolean verifyProductStock(@PathVariable String barcode) {

        Product product = productRepository.findByBarcode(barcode);
        if (product.getStockItem().getNumberOfProducts() > 0)
            return true;
        return false;
    }

}

