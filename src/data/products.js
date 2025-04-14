const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1695822822491-d92cee704368?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aVBob25lJTIwMTUlMjBQcm8lMjBNYXh8ZW58MHx8MHx8fDA%3D",
    description: "The latest iPhone with advanced camera system and powerful performance",
    category: "Smartphones",
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A17 Pro chip",
      "RAM": "8GB",
      "Storage": "256GB",
      "Camera": "48MP + 12MP + 12MP",
      "Battery": "4422mAh",
      "Operating System": "iOS 17",
      "Water Resistance": "IP68",
      "Colors": "Titanium Black, Titanium White, Titanium Blue, Titanium Natural"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=60",
    description: "Premium Android smartphone with S Pen support and advanced camera system",
    category: "Smartphones",
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Storage": "256GB",
      "Camera": "200MP + 12MP + 10MP + 10MP",
      "Battery": "5000mAh",
      "Operating System": "Android 13",
      "Water Resistance": "IP68",
      "Colors": "Phantom Black, Cream, Green, Lavender"
    }
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1706412703794-d944cd3625b3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29vZ2xlJTIwUGl4ZWwlMjA4JTIwUHJvfGVufDB8fDB8fHww",
    description: "AI-powered smartphone with exceptional camera capabilities",
    category: "Smartphones",
    specifications: {
      "Display": "6.7-inch LTPO OLED",
      "Processor": "Google Tensor G3",
      "RAM": "12GB",
      "Storage": "128GB",
      "Camera": "50MP + 48MP + 48MP",
      "Battery": "5050mAh",
      "Operating System": "Android 14",
      "Water Resistance": "IP68",
      "Colors": "Obsidian, Porcelain, Bay"
    }
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1706372124814-417e2f0c3fe0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE9uZVBsdXMlMjAxMSUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Flagship killer with Hasselblad camera and fast charging",
    category: "Smartphones",
    specifications: {
      "Display": "6.7-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "16GB",
      "Storage": "256GB",
      "Camera": "50MP + 48MP + 32MP",
      "Battery": "5000mAh",
      "Operating System": "OxygenOS 13",
      "Water Resistance": "IP64",
      "Colors": "Titan Black, Eternal Green"
    }
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1591531110744-49eacf536ee7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFhpYW9taSUyMDEzJTIwUHJvJTIwbW9iaWxlfGVufDB8fDB8fHww",
    description: "Premium smartphone with Leica camera system",
    category: "Smartphones",
    specifications: {
      "Display": "6.73-inch AMOLED",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Storage": "256GB",
      "Camera": "50MP + 50MP + 50MP",
      "Battery": "4820mAh",
      "Operating System": "MIUI 14",
      "Water Resistance": "IP68",
      "Colors": "Ceramic Black, Ceramic White"
    }
  },
  {
    id: 6,
    name: "MacBook Pro M2",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=60",
    description: "Professional laptop with M2 chip for ultimate performance",
    category: "Laptops",
    specifications: {
      "Display": "16-inch Liquid Retina XDR",
      "Processor": "M2 Pro chip",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Graphics": "19-core GPU",
      "Battery": "Up to 22 hours"
    }
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&auto=format&fit=crop&q=60",
    description: "Premium noise-cancelling headphones with exceptional sound quality",
    category: "Audio",
    specifications: {
      "Noise Cancelling": "Industry-leading",
      "Battery Life": "Up to 30 hours",
      "Bluetooth": "5.2",
      "Weight": "250g",
      "Microphones": "8 microphones"
    }
  },
  {
    id: 8,
    name: "Bose QuietComfort 45",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=800&auto=format&fit=crop&q=60",
    description: "Comfortable wireless headphones with excellent noise cancellation",
    category: "Audio",
    specifications: {
      "Noise Cancelling": "Advanced",
      "Battery Life": "Up to 24 hours",
      "Bluetooth": "5.1",
      "Weight": "238g",
      "Microphones": "6 microphones"
    }
  },
  {
    id: 9,
    name: "AirPods Pro 2",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWlyUG9kcyUyMFBybyUyMDJ8ZW58MHx8MHx8fDA%3D",
    description: "Premium wireless earbuds with active noise cancellation",
    category: "Audio",
    specifications: {
      "Noise Cancelling": "Active",
      "Battery Life": "Up to 6 hours",
      "Bluetooth": "5.3",
      "Weight": "5.3g per earbud",
      "Water Resistance": "IPX4"
    }
  },
  {
    id: 10,
    name: "Samsung QLED 4K TV",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1698434156086-918aa526b531?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFNhbXN1bmclMjBRTEVEJTIwNEslMjBUVnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Stunning 4K QLED TV with Quantum HDR and Smart TV features",
    category: "TVs",
    specifications: {
      "Screen Size": "65-inch",
      "Resolution": "4K UHD",
      "HDR": "Quantum HDR",
      "Smart TV": "Tizen OS",
      "Refresh Rate": "120Hz"
    }
  },
  {
    id: 11,
    name: "LG OLED C3",
    price: 1999.99,
    image: "https://plus.unsplash.com/premium_photo-1683133215610-854ad000bba1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Premium OLED TV with perfect blacks and infinite contrast",
    category: "TVs",
    specifications: {
      "Screen Size": "77-inch",
      "Resolution": "4K UHD",
      "HDR": "Dolby Vision, HDR10",
      "Smart TV": "webOS",
      "Refresh Rate": "120Hz"
    }
  },
  {
    id: 12,
    name: "Sony Bravia XR A95K",
    price: 2999.99,
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Flagship QD-OLED TV with exceptional picture quality",
    category: "TVs",
    specifications: {
      "Screen Size": "65-inch",
      "Resolution": "4K UHD",
      "HDR": "Dolby Vision, HDR10",
      "Smart TV": "Google TV",
      "Refresh Rate": "120Hz"
    }
  },
  {
    id: 13,
    name: "PlayStation 5",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGxheVN0YXRpb24lMjA1fGVufDB8fDB8fHww",
    description: "Next-gen gaming console with ultra-fast SSD",
    category: "Gaming",
    specifications: {
      "Processor": "AMD Zen 2",
      "Graphics": "AMD RDNA 2",
      "Storage": "825GB SSD",
      "Resolution": "Up to 8K",
      "Frame Rate": "Up to 120fps"
    }
  },
  {
    id: 14,
    name: "Xbox Series X",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1679139721919-5072e6949fed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fFhib3glMjBTZXJpZXMlMjBYfGVufDB8fDB8fHww",
    description: "Powerful gaming console with Game Pass subscription",
    category: "Gaming",
    specifications: {
      "Processor": "AMD Zen 2",
      "Graphics": "AMD RDNA 2",
      "Storage": "1TB SSD",
      "Resolution": "Up to 8K",
      "Frame Rate": "Up to 120fps"
    }
  },
  {
    id: 15,
    name: "Dell XPS 15",
    price: 1799.99,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=60",
    description: "Premium Windows laptop with stunning 4K display",
    category: "Laptops",
    specifications: {
      "Display": "15.6-inch 4K OLED",
      "Processor": "Intel Core i9",
      "RAM": "32GB",
      "Storage": "1TB SSD",
      "Graphics": "NVIDIA RTX 3050",
      "Battery": "Up to 12 hours"
    }
  },
  {
    id: 16,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1615750173609-2fbf12fd1d2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Business laptop with legendary ThinkPad durability",
    category: "Laptops",
    specifications: {
      "Display": "14-inch 4K IPS",
      "Processor": "Intel Core i7",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Graphics": "Intel Iris Xe",
      "Battery": "Up to 15 hours"
    }
  },
  
  {
    id: 17,
    name: "Bose SoundLink Revolve+",
    price: 299.99,
    image: "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEJvc2UlMjBTb3VuZExpbmslMjBSZXZvbHZlJTJCJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "360-degree portable Bluetooth speaker with deep bass",
    category: "Audio",
    specifications: {
      "Battery Life": "Up to 16 hours",
      "Water Resistance": "IP55",
      "Bluetooth": "4.2",
      "Weight": "0.9kg",
      "Range": "9m"
    }
  },
  {
    id: 18,
    name: "Apple Watch Series 9",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60",
    description: "Advanced smartwatch with health monitoring features",
    category: "Wearables",
    specifications: {
      "Display": "Always-On Retina",
      "Processor": "S9 chip",
      "Battery Life": "18 hours",
      "Water Resistance": "50m",
      "Health Features": "ECG, Blood Oxygen"
    }
  },
  {
    id: 19,
    name: "Samsung Galaxy Watch 6 Pro",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60",
    description: "Premium smartwatch with advanced health tracking",
    category: "Wearables",
    specifications: {
      "Display": "1.4-inch Super AMOLED",
      "Processor": "Exynos W920",
      "Battery Life": "40 hours",
      "Water Resistance": "5ATM + IP68",
      "Health Features": "ECG, BIA, Blood Pressure"
    }
  },
  {
    id: 20,
    name: "Garmin Fenix 7X Pro",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
    description: "Rugged multisport GPS smartwatch",
    category: "Wearables",
    specifications: {
      "Display": "1.4-inch MIP",
      "Battery Life": "37 days",
      "Water Resistance": "10ATM",
      "GPS": "Multi-band GNSS",
      "Health Features": "Pulse Ox, HR, Sleep Tracking"
    }
  },
  {
    id: 21,
    name: "Fitbit Sense 2",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1670082379834-be7116cf7d70?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rml0Yml0JTIwU2Vuc2UlMjAyJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    description: "Advanced health smartwatch with stress management",
    category: "Wearables",
    specifications: {
      "Display": "1.58-inch AMOLED",
      "Battery Life": "6+ days",
      "Water Resistance": "5ATM",
      "Health Features": "ECG, EDA, Skin Temperature"
    }
  },
  {
    id: 22,
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 1199.99,
    image: "https://images.unsplash.com/flagged/photo-1557050406-b3d281ecde9b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMEdhbGF4eSUyMFRhYiUyMFM5JTIwVWx0cmElMjB0YWJsZXR8ZW58MHx8MHx8fDA%3D",
    description: "Premium Android tablet with S Pen support and AMOLED display",
    category: "Tablets",
    specifications: {
      "Display": "14.6-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Storage": "256GB",
      "Battery": "11200mAh",
      "Operating System": "Android 13",
      "S Pen": "Included",
      "Colors": "Graphite, Beige"
    }
  },
  {
    id: 23,
    name: "iPad Pro M2",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1631342617268-61f3b16d2e6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Professional tablet with M2 chip and Liquid Retina XDR display",
    category: "Tablets",
    specifications: {
      "Display": "12.9-inch Liquid Retina XDR",
      "Processor": "M2 chip",
      "RAM": "8GB",
      "Storage": "256GB",
      "Battery": "Up to 10 hours",
      "Operating System": "iPadOS 16",
      "Apple Pencil": "2nd Generation",
      "Colors": "Space Gray, Silver"
    }
  },
  {
    id: 24,
    name: "Sony WF-1000XM5",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1649875951986-917ce191719f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29ueSUyMFdGJTIwMTAwMFhNNSUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Premium wireless earbuds with industry-leading noise cancellation",
    category: "Audio",
    specifications: {
      "Noise Cancelling": "Industry-leading",
      "Battery Life": "Up to 8 hours",
      "Bluetooth": "5.3",
      "Weight": "5.9g per earbud",
      "Water Resistance": "IPX4",
      "Microphones": "6 microphones"
    }
  },
  {
    id: 25,
    name: "Bose Soundbar 900",
    price: 899.99,
    image: "https://plus.unsplash.com/premium_photo-1682147211405-0bf9fb3c0f1f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fEJvc2UlMjBTb3VuZGJhciUyMDkwMHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Premium soundbar with Dolby Atmos and built-in voice assistants",
    category: "Audio",
    specifications: {
      "Channels": "5.1.2",
      "Dolby Atmos": "Yes",
      "Voice Control": "Alexa, Google Assistant",
      "Bluetooth": "5.0",
      "HDMI": "eARC",
      "Wi-Fi": "Yes"
    }
  },
  {
    id: 26,
    name: "LG C3 OLED 83-inch",
    price: 4999.99,
    image: "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVsZXZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Massive OLED TV with perfect blacks and infinite contrast",
    category: "TVs",
    specifications: {
      "Screen Size": "83-inch",
      "Resolution": "4K UHD",
      "HDR": "Dolby Vision, HDR10",
      "Smart TV": "webOS",
      "Refresh Rate": "120Hz",
      "HDMI": "4x HDMI 2.1"
    }
  },
  {
    id: 27,
    name: "Samsung QN90C Neo QLED",
    price: 3499.99,
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbGV2aXNpb258ZW58MHx8MHx8fDA%3D",
    description: "Premium Neo QLED TV with Mini LED backlighting",
    category: "TVs",
    specifications: {
      "Screen Size": "85-inch",
      "Resolution": "4K UHD",
      "HDR": "Quantum HDR 32x",
      "Smart TV": "Tizen OS",
      "Refresh Rate": "144Hz",
      "HDMI": "4x HDMI 2.1"
    }
  },
  {
    id: 28,
    name: "ASUS ROG Zephyrus G14",
    price: 1799.99,
    image: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Powerful gaming laptop with AMD Ryzen 9 and RTX 4070",
    category: "Laptops",
    specifications: {
      "Display": "14-inch QHD+ 165Hz",
      "Processor": "AMD Ryzen 9 7940HS",
      "RAM": "32GB",
      "Storage": "1TB SSD",
      "Graphics": "NVIDIA RTX 4070",
      "Battery": "76Wh"
    }
  },
  {
    id: 29,
    name: "HP Spectre x360 16",
    price: 1699.99,
    image: "https://images.unsplash.com/photo-1714578187218-d1828f5ebd6e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium 2-in-1 laptop with 4K OLED display",
    category: "Laptops",
    specifications: {
      "Display": "16-inch 4K OLED",
      "Processor": "Intel Core i7-13700H",
      "RAM": "16GB",
      "Storage": "1TB SSD",
      "Graphics": "Intel Iris Xe",
      "Battery": "83Wh"
    }
  },
  {
    id: 30,
    name: "Nintendo Switch OLED",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWV8ZW58MHx8MHx8fDA%3D",
    description: "Hybrid gaming console with OLED display",
    category: "Gaming",
    specifications: {
      "Display": "7-inch OLED",
      "Storage": "64GB",
      "Resolution": "720p handheld, 1080p docked",
      "Battery": "4.5-9 hours",
      "Controllers": "Joy-Con included"
    }
  },
  {
    id: 31,
    name: "Steam Deck",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Handheld gaming PC with SteamOS",
    category: "Gaming",
    specifications: {
      "Display": "7-inch 1280x800",
      "Processor": "AMD Zen 2",
      "RAM": "16GB",
      "Storage": "512GB NVMe SSD",
      "Battery": "40Wh",
      "Operating System": "SteamOS"
    }
  },
  {
    id: 32,
    name: "Garmin Venu 3",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1718309602791-8f3cc83840b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZpdGJpdCUyMFNlbnNlJTIwMiUyMHdhdGNofGVufDB8fDB8fHww",
    description: "Advanced smartwatch with health monitoring and music storage",
    category: "Wearables",
    specifications: {
      "Display": "1.4-inch AMOLED",
      "Battery Life": "Up to 14 days",
      "Water Resistance": "5ATM",
      "Health Features": "HR, SpO2, Sleep Tracking",
      "Music Storage": "Up to 650 songs",
      "GPS": "Yes"
    }
  },
  {
    id: 33,
    name: "Fitbit Charge 6",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1648824906532-a6e5a27ce8a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZpdGJpdCUyMFNlbnNlJTIwMiUyMHdhdGNofGVufDB8fDB8fHww",
    description: "Advanced fitness tracker with built-in GPS",
    category: "Wearables",
    specifications: {
      "Display": "1.04-inch AMOLED",
      "Battery Life": "Up to 7 days",
      "Water Resistance": "50m",
      "Health Features": "HR, SpO2, Sleep Tracking",
      "GPS": "Built-in",
      "Music Control": "Yes"
    }
  },
  
  
];

export default products; 





