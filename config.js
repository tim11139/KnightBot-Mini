/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348116533387','2348161271354'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGFFELhEdsYII3lC84GVjHwoooBAKpAoBJ/z3Dezp6XnYne19K4oTefJk5qnvgGSYogVqgPId5AW+Q4baI2tyBBSglkGACtAFPmQQKGClHseLixMTZ+nOOX1+sA52FYWr3GwE3XDCiXoJ5w/O9I/0DTy7IC/dBHu/AfTuRh3zzWQ/V8veuZFW5d6tL2R3ysPp1BXC61XyJr7ck8bVG3i2iBAXmIR6HqEUFTBZoGYDcfE1+sZiLfZUHOnTx8Qmj6riVqYv8mF02w/D1NsvOosyrSTCH72v0aczvAh6fUm+TbAqxfMDH/dK+pjVqD661FtJ8VFQT9PGIMN3+hSHBPkzHxGGWfNl3dezgUexi0Vfcg4PjdTaIN4OcbISyI646zG/QuFCr88jc/g14oPVcjkbkns/1tfo7IfiJrZ7+sk8yVYkxJeI6+xOj3o5WRrSr8Q3xUdWrv9H9+HaICdBzuStyKFHvdrBThmGm32Sa0mQCTSSe/n42g+tVP8a/RRqdthIWWoYt02lR3PbvE4TVd9UTazarNn4a2va59TieP6kD1lZ/I7lqNLcdCQ6JtH4U94R0X2OjLsw9vbZ5ESZng4Zt4A3W+Xlxlx39oS7eSOnTh5iad4cza7uyztZqrfaXm25mc7F4fSG7bfXRFfUzHyg9J9dUKAQU1ZAhjPyuhv0uwD69x3yCsRe8gJxsID2HV6XhNdJkGST8dnJmUFubCNsOx3eSOIr4VmwDKQ30AV5kXmIUuSbmLKsaFaIUhgiCpQ//+oCgmr2blzbju93QYALyg6kzJMM+h+ufvyEnpeVhO0a4mntARVA4T6vEWOYhLTVsSSw8CJ8R1oEGQVKABOKfk6ICuQDhRUl+rm1Wua3wltDw9Yu/AZ0QfoyBPttJPmhzA1EWerznKgM/qDfqhYW5vk3ghjoguRVJguixEt9TpAGUlvW3j5/0mvRfMQgTihQgLZ81LhnG/qa0JxyhjHWw7EWjsHnOB+5eNd9BhMHGrsDL6vCw5onpiheBlZEjwE3cs6O0as112cxjrnD2z+AAAX0stFxulzYHsqDoC8UtJ7r8rmJy5z25wvqLAfiaDUWighbzCqNVM3cbW6h3Vi+GkI6MXr7bSxbbi4E6bKXXUPSMWfjNkRd4KM79tCvzYaT+IiFyJualtWJQqzWduciTZCnpYXHEc+inqlv43WZqBozhYt9WR8vVRQdTpeDltR3o8zmeEks/eFVlSSvQ0c/RNV7Yl8bk/x4qfArS61R7WeA0WvxCWzt+2/j3om3+eKe3V8wfjwl/7KO6s7InWN0TayejbzH7rLtdAZ+fHanRF4nx+n2Ltkp756HmTwFz+dfXZAnkAVZkQIFQOIXGfZBFxRZ2QZ2RoLsN800dTab2KHWTp5AysafS7DHKaIMpjlQ+qI4EAeyPBLfqzZFlpuQRkABJOVVFzz/BhXc465RBwAA',
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
  
