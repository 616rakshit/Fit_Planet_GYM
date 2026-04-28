import galleryImageOne from "../assets/gallery-1.jpg";

// Mock data for Fit Planet gym website

export const SITE_DATA = {
  hero: {
    title: "TRANSFORM YOUR BODY",
    subtitle: "ELEVATE YOUR MIND",
    description: "Join the ultimate fitness community where champions are made",
    cta: "START YOUR JOURNEY",
    image: "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd"
  },
  
 whyChooseUs: [
  {
    id: 1,
    title: "STATE-OF-THE-ART EQUIPMENT",
    description: "Advanced strength training machines, modern cardio equipment, and premium free weights designed for muscle building, fat loss, and complete body transformation."
  },
  {
    id: 2,
    title: "EXPERT TRAINERS",
    description: "Certified personal trainers offering customized workout plans, weight loss programs, muscle gain training, and professional fitness guidance to achieve your goals faster."
  },
  {
    id: 3,
    title: "FLEXIBLE SCHEDULES",
    description: "18/7 gym access with convenient batch timings, flexible workout hours, and easy membership plans tailored to your daily routine."
  },
  {
    id: 4,
    title: "COMMUNITY DRIVEN",
    description: "A motivating fitness community focused on strength training, functional workouts, group sessions, and a supportive environment for long-term results."
  }
],

  membershipPlans: [
    {
      id: 1,
      name: "  MONTHLY   ",
      oldPrice: "₹2500",
      price: "₹1,800",
      duration: "per month",
      features: [
        "Full Gym Access",
        "Personal Trainer Support (On Request)",
        "Flexible Short-Term Commitment",
        "Perfect for Beginners & Trial Members"
      ],
      popular: false
    },
    {
      id: 2,
      name: "QUARTERLY",
      oldPrice: "₹6000",
      price: "₹4,500",
      duration: "3 months",
      features: [
        "Full Gym Access",
        "Trainer Guidance Available",
        "Better Value Than Monthly Plan",
        "Ideal for Consistent Progress"
      ],
      popular: true
    },
    {
      id: 3,
      name: "HALF-YEARLY",
      oldPrice: "₹12000",
      price: "₹8,800",
      duration: "6 months",
      features: [
        "Full Gym Access to All Areas",
        "Trainer Guidance Available",
        "More savings Than Short-Term Plans",
        "Strong Commitment = Better Results"
      ],
      popular: false
    },
    {
      id: 4,
      name: "YEARLY",
      oldPrice: "₹24,000",
      price: "₹16,500",
      duration: "12 months",
      features: [
        "Unlimited Gym Access",
        "Long-Term Fitness Commitment",
        "Best Savings Plan",
        "Perfect for Serious Fitness Enthusiasts"
      ],
      popular: false
    }
  ],

  trainers: [
    {
      id: 1,
      name: "ALEX RODRIGUEZ",
      specialization: "Strength & Conditioning",
      experience: "8 Years Experience",
      category: "General Trainer",
      image: "https://images.unsplash.com/photo-1483721310020-03333e577078",
      bio: "Former athlete specializing in powerlifting and functional training"
    },
    {
      id: 2,
      name: "SARAH MITCHELL",
      specialization: "HIIT & Cardio Expert",
      experience: "6 Years Experience",
      category: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1517438984742-1262db08379e",
      bio: "Marathon runner and certified group fitness instructor"
    }
  ],


  gallery: [
    { id: 1, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/71lxbj4qgp6t9jq-ly197m49b1.jpg?imwidth=463.3333333333333", alt: "Workout Equipment" },
    { id: 2, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/ya9rd6zz6fj8034-bfck66ekyd.jpg?imwidth=463.3333333333333", alt: "Exercise Mat & Weights" },
    { id: 3, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/xxnyl45apn0nmy7-o46z6n9djt.jpg?imwidth=463.3333333333333", alt: "Dumbbells & Nutrition" },
    { id: 4, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/gmq216qnn1503hd-pw31ojzjhu.jpg?imwidth=463.3333333333333", alt: "Strength Equipment" },
    { id: 5, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/lo7v7ac46e5nyai-i77pxjvvcr.jpg?imwidth=463.3333333333333", alt: "Partner Training" },
    { id: 6, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/idfzqjbpn28l1il-cb99jicu6p.jpg?imwidth=463.3333333333333", alt: "Outdoor Running" },
    { id: 7, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/tvfdivfeo6gkm55-12r6jikdkm.jpg?imwidth=463.3333333333333", alt: "Athletic Performance" },
    { id: 8, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/aks94jvska3qznk-wil5wwwk0b.jpg?imwidth=463.3333333333333", alt: "Training Session" },
    { id: 9, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/gelrdxg6jh6nkl7-tt0qzif67k.jpg?imwidth=463.3333333333333", alt: "Functional Training" },
    { id: 10, image: "https://content.jdmagicbox.com/v2/comp/delhi/d2/011pxx11.xx11.251018140053.g8d2/catalogue/di8bgdiq2ck0gzp-htytprld97.jpg?imwidth=463.3333333333333", alt: "Workout Preparation" }
  ],

  about: {
    mission: "At Fit Planet Gym, our mission is to deliver professional fitness training, strength and conditioning programs, and result-driven workout plans that help individuals achieve sustainable weight loss, muscle building, and total body transformation. We are committed to providing certified personal trainers, modern gym equipment, structured cardio workouts, and customized fitness programs tailored for beginners, athletes, and fitness enthusiasts. Our goal is to create a motivating fitness environment that promotes fat loss, endurance, flexibility, and overall wellness while encouraging a disciplined and healthy lifestyle for long-term results.",
    vision: "Our vision is to become the leading fitness destination and trusted gym in India, known for world-class facilities, expert personal training, and high-performance fitness programs. We aim to build a strong fitness community focused on strength training, functional workouts, body transformation, and holistic wellness. Through innovation, advanced gym equipment, and science-based training methods, Fit Planet Gym strives to set new standards in fitness excellence, helping members unlock their full potential and achieve peak physical performance.",
    facilities: [
      "Certified Personal Trainers & Expert Fitness Coaching",
      "Dedicated Strength & Weightlifting Area for Muscle Building",
      "Modern Cardio Equipment for Weight Loss & Endurance Training",
      "Customized Weight Loss & Muscle Gain Programs",
      "Friendly Trainers with Personalized Attention",
      "Professional Nutrition Guidance & Diet Consultation",
      "Clean & Secure Storage Space for Members",
      "Supportive Fitness Environment Focused on Real Results"
    ]
  },

  contact: {
    address: "B-3/83, Paschim Vihar, New Delhi, India 110056",
    phone: "+91 9650161386 , +91 9821900471",
    email: "fitplanetgym1386@gmail.com",
    hours: " 18/7 Access • Open Every Day",
    // Embed map without a forced center "pin" UI.
    mapEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=77.08985925439446%2C28.6551133936506%2C77.10985925439446%2C28.6751133936506&layer=mapnik"
  },

  testimonials: [
    {
      id: 1,
      name: "Rahul Verma",
      text: "Lost 15kg in 4 months! The trainers are amazing and the community is so supportive.",
      rating: 5
    },
    {
      id: 2,
      name: "Anjali Desai",
      text: "Best gym I've ever joined. Clean facilities, great equipment, and flexible hours.",
      rating: 5
    },
    {
      id: 3,
      name: "Vikram Singh",
      text: "The personal training sessions transformed my approach to fitness. Highly recommend!",
      rating: 5
    }
  ]
};
