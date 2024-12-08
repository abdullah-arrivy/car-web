const carText = [
    {
      id: 1,
      name: "Toyota",
      logo: "https://fakeimg.pl/350x300/?text=Toyota",
      description: "Toyota is a Japanese automobile manufacturer known for reliable and affordable cars.",
      popularModels: [
        {
          name: "Corolla",
          basePrice: 20000,
          features: ["Air Conditioning", "Power Steering", "ABS"]
        },
        {
          name: "Camry",
          basePrice: 25000,
          features: ["Leather Seats", "Sunroof", "Automatic Transmission"]
        }
      ],
      customOptions: [
        { option: "Alloy Rims", price: 500 },
        { option: "Fog Lamps", price: 300 },
        { option: "Rear Camera", price: 200 }
      ]
    },
    {
      id: 2,
      name: "Honda",
      logo: "https://fakeimg.pl/350x300/?text=Honda",
      description: "Honda is renowned for its innovation, fuel-efficient vehicles, and sporty designs.",
      popularModels: [
        {
          name: "Civic",
          basePrice: 22000,
          features: ["Cruise Control", "Touchscreen Display", "Keyless Entry"]
        },
        {
          name: "Accord",
          basePrice: 28000,
          features: ["Lane Assist", "Blind Spot Monitor", "Heated Seats"]
        }
      ],
      customOptions: [
        { option: "Sunroof", price: 700 },
        { option: "Leather Seats", price: 800 },
        { option: "Adaptive Cruise Control", price: 1000 }
      ]
    },
    {
      id: 3,
      name: "Suzuki",
      logo: "https://fakeimg.pl/350x300/?text=Suzuki",
      description: "Suzuki specializes in compact vehicles that are budget-friendly and practical.",
      popularModels: [
        {
          name: "Swift",
          basePrice: 15000,
          features: ["Dual Airbags", "Power Windows", "Bluetooth Connectivity"]
        },
        {
          name: "Vitara",
          basePrice: 20000,
          features: ["4WD", "Touchscreen Navigation", "Climate Control"]
        }
      ],
      customOptions: [
        { option: "Alloy Wheels", price: 400 },
        { option: "Roof Rails", price: 250 },
        { option: "Premium Audio System", price: 300 }
      ]
    }
  ];
  
  export default carText;