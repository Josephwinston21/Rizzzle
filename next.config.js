module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['your-image-domain.com'],
  },
};

module.exports = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    HUBSPOT_API_KEY: process.env.NEXT_PUBLIC_HUBSPOT_API_KEY,
    TWILIO_API_KEY: process.env.NEXT_PUBLIC_TWILIO_API_KEY,
    RAZORPAY_API_KEY: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY
  },
  images: {
    domains: ['your-s3-bucket-url'],
  },
};


/*
Instructions:

Set API URL: Ensure the API_URL environment variable is set correctly.
Update Image Domains: Add any domains that will be serving images to the images.domains array.*/
