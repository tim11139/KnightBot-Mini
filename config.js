/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348161271354','2348161271354'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUW5OiOBj9K1t5bWtaQC5S1VXLTUVUQMVBt+YhQsTI1SSAOOV/36J7enoedmd730ISzne+c86X76AoMUUO6oD6HVQEN5Chfsm6CgEV6PXphAgYgBgyCFRwdbpmjRSEdt1m6Cf5lmzltl2ky71kSQWWuUzWDqPd2Qj9F/AYgKo+Zjj6DaAd3usxPUXXxpDG6Wy/2roXfrfx7LFsSdMbPvsz5YC6WueSF/DoESEmuEis6oxyRGDmoM6DmHyOvm2Pc5fL2Fwzg3boUqaj2ByhFTzHk2z+JIhZ5O9DwdYt63P0YXeeV/ayVsYcbOrldHebeYag5MJqWn6dMj3OnGdtdlSwMHyjT3FSoNiOUcEw6z6tO3a7WyCjIJEc6FbZLagO9OCbK6ZVgV/Nr4ln7wTzErLik7qz9R3W7co7GDR8ciFXm54SyXPBcUbrNHVmijFJb8pmXvnar8Q98p6V9P/ojo3rtstFP7xWOyQt9uLh+rUsJfmJhHUKF+aMsDHPNZmX08/Rv6U77jIXimnenpL7s62vrGC7OPPD3crlCXOP+F5F1iSqrP0Hfchq8juW7deNeykFPWiCLW7ta2HT55B7fu5WzGGuoxzu4XLGt+HW8ph1ms2SmxvyC2d7Xtwvz1WZGdGTngfa0dG1q1m2C2E6Ilry8tpRijo7Bir3GACCEkwZgQyXRb83lgcAxs0GRQSxV3XBdZndykSreS/ZJZJlGJJn6eYtP/LF/n68pTW5ZJ2mETcqX8AAVKSMEKUonmHKStItEaUwQRSof30bgALd2JtvfTWBG4ATJpQFRV1lJYzfTX0/hFFU1gXbdEVk9AtEgDr82EaM4SKhvYx1AUl0xg0yzpBRoJ5gRtHPBhFBMVAZqdHPoTXKuNd9Ho4Xo8NoDwYgf/UDx0AFvDBSOInjZU4QRyov/Em/tD0urKovBWJgAArYXweQMExh8QdFpEFgALLX3zllNByLoiKOOXEoiT1Af/D4ybwvFCMGcUaBCgyHJ03VGpZXOBUdTqdammhGooGPTt8T82ZJtDygJpvYQZnf6+Xpmi41ruTngSe6O46/T+xmxp2Nq1uH0cs/gAAVeNtEf0pai2q0rbu9uFBO+zG/q4QkvQbrYJyGcWW3cnDYIX/NpYpns01L9HR4NKVq39SVa0pH70QiHseNyEmtDyXNf+mrxajBEfq1mLPZxHFaW+aEIZkIR4mzZtdjsqqV6ggXG6+5TFLjIMh61m4UUWzlu6F1mmI+cbrGfL3Z+v5avhp5ah8t7YSV4SKwTO0ty6+zlP14w/BrzHoP+88TRq9Pwg+r/tvTN+Z99oaPwS8gP16Zf5lUPTSnIRHXm4kzp/JlJlWmtoIrvDOftlkc09tmcRvv/euFZAJ4PL4NQJVBdipJDlRA8yMEA0DKuk+yXZzK31QydNs2tGTS951ByrSP6djiHFEG8wqonCzzMi9KwvDtlkfKagbpGahASLxgnoLH3zWDpwhqBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
