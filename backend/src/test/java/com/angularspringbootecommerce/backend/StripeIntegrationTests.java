package com.angularspringbootecommerce.backend;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

public class StripeIntegrationTests {

    @BeforeAll
    static void setupTest() {
        //Stripe.apiKey = "";
    }

    @Test
    void testChargeCreation() throws StripeException {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", 1000);
        chargeParams.put("currency", "usd");
        chargeParams.put("description", "Test payment from Spring Boot");
        chargeParams.put("source", "tok_visa");

        Charge charge = Charge.create(chargeParams);

        Assertions.assertNotNull(charge);
        Assertions.assertEquals(charge.getStatus(), "succeeded");
    }
}