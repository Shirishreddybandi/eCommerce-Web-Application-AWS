package com.angularspringbootecommerce.backend.dtos;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class OrderItemDto {
    private Long productId;
    private String productName;
    private int quantity;
    private String imgUrl;
    private BigDecimal price;
}
