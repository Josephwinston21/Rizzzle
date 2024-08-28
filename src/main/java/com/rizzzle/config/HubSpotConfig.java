package com.rizzzle.config;

import com.hubspot.crm.CrmClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HubSpotConfig {

    @Bean
    public CrmClient hubSpotClient() {
        return new CrmClient("HUBSPOT_API_KEY");
    }
}
