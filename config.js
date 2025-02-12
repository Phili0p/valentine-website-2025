// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Xandria",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 🧸",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '🤍', '❤️‍🔥', '💗',],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you, I love you! 🤍"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next 🍓"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌺", // The big question!
            yesBtn: "YES ABSOLUTELY!😍",                                             // Text for "Yes" button
            noBtn: "No☹️"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "I LOVE YOU TOO BABY 🌷🦢",  // Shows when they go past 5000%
        high: "EVEN more than that! 😍❤️‍🔥",              // Shows when they go past 1000%
        normal: "I love you more than that! 🍓"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I'm so lucky to have you as my first valentines baby 🤍",
        message: "Now are you excited to get your gifts this fridayy???!??!?! 🍓🍰😘",
        emojis: "YAAAAAYYYYYYY"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffd6e0",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffe4e1",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff94a7",     // Button color (should stand out against the background)
        buttonHover: "#ffb3c1",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff5c75"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: false,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dqthjdzgm/video/upload/v1739335128/beabadoobee_-_Glue_Song_Official_Music_Video_tdmlm6.mp3", // Music streaming URL
        startText: "🎵 Play Beabadobee",        // Button text to start music
        stopText: "🔇 Stop Playing Beabadobee ☹️",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
