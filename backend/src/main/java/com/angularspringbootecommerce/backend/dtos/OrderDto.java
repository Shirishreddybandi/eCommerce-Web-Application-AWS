package com.angularspringbootecommerce.backend.dtos;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class OrderDto {
    private Long id;
    private String dateCreated;
    private BigDecimal total;
    private List<OrderItemDto> orderItems; // <--- ADD THIS
}
