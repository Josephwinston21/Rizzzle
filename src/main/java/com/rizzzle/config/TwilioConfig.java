package com.rizzzle.config;

import com.twilio.Twilio;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TwilioConfig {

    public TwilioConfig() {
        Twilio.init("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN");
    }
}
