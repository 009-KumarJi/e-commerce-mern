const products = [
    {
        name: 'Airpods Pro (2nd Generation)',
        image: '/images/airpods.jpg',
        description: '- Active Noise Cancellation reduces unwanted background noise\n' +
            '- Adaptive Transparency lets outside sounds in while reducing loud environmental noise\n' +
            '- Personalised Spatial Audio with dynamic head tracking places sound all around you',
        brand: 'Apple',
        category: 'Electronics',
        price: 19499,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12
    },
    {
        name: 'Airpods max',
        image: '/images/airpods-max.jpg',
        description: '- Apple-designed dynamic driver provides high-fidelity audio\n' +
            '- Active Noise Cancellation blocks outside noise, so you can immerse yourself in music\n' +
            '- Transparency mode for hearing and interacting with the world around you\n' +
            '- Spatial audio with dynamic head tracking provides theater-like sound that surrounds you\n' +
            '- Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences\n' +
            '- Designed with a knit-mesh canopy and memory foam ear cushions for an exceptional fit\n' +
            '- Magical experience with effortless setup, on-head detection, and seamless switching between devices\n' +
            '- Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV\n' +
            '- 20 hours of listening, movie watching, or talk time with Active Noise Cancellation and spatial audio enabled\n' +
            '- Store in ultra low-power mode with the slim Smart Case',
        brand: 'Apple',
        category: 'Electronics',
        price: 59999,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8
    },
    {
        name: 'Echo Dot (4th Gen, 2020 release) with clock',
        image: '/images/echo-dot.jpg',
        description: '- Meet the all-new Echo Dot with clock - Our most popular smart speaker with Alexa. The sleek, compact design delivers crisp vocals and balanced bass for full sound.\n' +
            '- Perfect for your nightstand - See the time, alarms, and timers on the LED display. Tap the top to snooze an alarm.\n' +
            '- Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices.\n' +
            '- Connect with others - Call almost anyone hands-free. Instantly drop in on other rooms or announce to the whole house that dinner\'s ready.\n' +
            '- Designed to protect your privacy - Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls including a mic off button.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 4499,
        countInStock: 5,
        rating: 3,
        numReviews: 12
    },
    {
        name: 'Fujifilm X-T4 26 MP Mirrorless Camera Body',
        image: '/images/fujifilm-cam.jpg',
        description: '- Putting Stability in Your Hands: A huge part of creating great photos or videos is making sure you are in the right place at the right time – and that often means making handheld images to get to the heart of the action. X-T4’s state-of-the-art, five-axis In-Body Image Stabilization (IBIS) provides up to 6.5 stops of image stabilization to make sure that, even in the midst of all the excitement, your images remain steady and sharp. Combine this with the new four-axis Digital Image Stabilizer, and you have lots of room to maneuver.\n' +
            '- Performance You Can Rely On: For any serious image maker, having a tool that can be relied upon to perform flawlessly whenever it is required is extremely important. For this reason, X-T4 features a newly developed mechanical shutter that is the fastest and most robust in the history of the X series. Not only can it make images at 15 frames per second, but it is also rated for 300,000 actuations2. When you combine this with it’s larger capacity battery that is capable of up to 600 frames per charge2, X-T4 has the power and the durability to give you the peace of mind that you’ll never miss the perfect opportunity.\n' +
            '- Find the Best Angle for Your Story: When chasing the perfect image, versatility is key, so the last thing you want is to be hampered by awkward angles. The 1.62 million pixel vari-angle touchscreen LCD featured on X-T4 can be adjusted to make it visible from a wide range of positions. This not only gives you a high-quality monitor to frame with, but also provides quick and simple controls when you need them most. On the flip side, there are times when you need to minimize the light and distractions that a screen can create. That’s why X-T4’s LCD has been designed to easily fold away so it is completely hidden from view, leaving the updated 3.69 million pixel/100fps electronic viewfinder to help you focus on the moment at hand.\n' +
            '- When Your Story Needs Movement: The modern image maker is blurring the lines between photography and videography, and X-T4 has been designed to celebrate this new generation of hybrid creativity. With the simple flick of a switch, movie mode is activated, meaning X-T4 is capable of recording both professional-level DCI 4K/60p and Full HD/240p super slow-motion video. It is also possible to record F-Log footage in 10-bit color, straight to the card. What’s more, the innovative AF-C subject tracking works in low-light conditions down to -6EV and the camera’s use of a new, high capacity battery lets you push your creative limits.',
        brand: 'Fujifilm',
        category: 'Electronics',
        price: 154999,
        countInStock: 11,
        rating: 5,
        numReviews: 12
    },
    {
        name: 'Apple iPhone 15 Pro Max',
        image: '/images/iphone-pro-max.jpg',
        description: '- 6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel\n' +
            '- Pro camera system with new 12MP Telephoto, Wide, and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; Macro mode; Photographic Styles, ProRes video, and more\n' +
            '- A15 Bionic chip for lightning-fast performance\n' +
            '- Up to 2.5 hours longer battery life than iPhone 12 Pro Max\n' +
            '- Industry-leading IP68 water resistance\n' +
            '- Supports MagSafe accessories for easy attach and faster wireless charging\n' +
            '- iOS 17 packs new features to do more with iPhone than ever before\n',
        brand: 'Apple',
        category: 'Electronics',
        price: 194999,
        countInStock: 7,
        rating: 4,
        numReviews: 8
    },
    {
        name: 'Logitech MX Master Wireless Mouse',
        image: '/images/logitech-mouse.jpg',
        description: '- Unique thumb wheel: For horizontal navigation and advanced gestures\n' +
            '- Easy connections for multiple computers: Use with up to three Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology\n' +
            '- Easy switching between computers with the touch of the button\n' +
            '- Tracks virtually anywhere - even on glass: The Dark field Laser sensor tracks flawlessly even on glass and high-gloss surfaces (4mm minimum thickness)\n' +
            '- Advanced power management: Up to 40 days of power on single charge. You can get enough power for a full day of usage in only 4 minutes, with no downtime while recharging. ( Battery life may vary based on user and computer conditions)\n' +
            '- Customizable experience: Use Logitech Options Software to customize buttons and actions to your needs',
        brand: 'Logitech',
        category: 'Electronics',
        price: 5999,
        countInStock: 0,
        rating: 4.5,
        numReviews: 12
    },
    {
        name: 'Sony PlayStation 5 Console',
        image: '/images/PS5.jpg',
        description: '- Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.\n' +
            '- Stunning Games - Marvel at incredible graphics and experience new PS5 features.\n' +
            '- Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.\n' +
            '- PlayStation Plus - Play select PS5 games online with friends, get access to PlayStation Plus, and more.',
        brand: 'Sony',
        category: 'Electronics',
        price: 49999,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8
    },
    {
        name: 'Samsung Galaxy S21 Ultra 5G',
        image: '/images/samsung-galaxy.jpg',
        description: '- 6.8-inch Dynamic AMOLED 2X display with 120Hz refresh rate\n' +
            '- 108MP+12MP+10MP+10MP rear camera setup-100X Space Zoom, 8K Video Recording, Space Zoom, Dual OIS, Night Mode, Pro Mode, 33MP front camera\n' +
            '- 12GB RAM | 256GB internal Storage | Dual SIM (nano+nano) dual-standby (5G+5G)\n' +
            '- Android v14.0 operating system with 2.9GHz Exynos 2100 octa core processor\n' +
            '- 5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase\n' +
            '- Box also includes: Non-removable battery included, earphones, travel adapter, USB cable and user manual',
        brand: 'Samsung',
        category: 'Electronics',
        price: 105999,
        countInStock: 5,
        rating: 3.5,
        numReviews: 12
    }
]

export default products