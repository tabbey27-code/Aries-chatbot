# 🔥 Aries AI Chatbot - Fully Customizable

Deploy your own AI chatbot in minutes! Customize everything - name, personality, logo, and more!

## ✨ Features

- 🎨 **Fully Customizable** - Change AI name, personality, tagline, and logo
- ⚡ **Fast & Modern** - Built with Next.js 14 and Tailwind CSS
- 🤖 **Powered by Aries AI** - Advanced AI models at your fingertips
- 📱 **Mobile Friendly** - Beautiful responsive design
- 🚀 **One-Click Deploy** - Deploy to Vercel instantly

## 🎯 Quick Start

### 1. Get Your Free API Key

Sign up at [api.aries.website/signup](https://api.aries.website/signup) and get your free Aries API key!

### 2. Customize Your AI

Edit `config.ts`:

```typescript
export const CONFIG = {
  ARIES_API_KEY: 'ar_doy-your-api-key-here',
  AI_NAME: 'MyBot',
  AI_DESCRIPTION: 'a helpful coding assistant',
  TAGLINE: 'Code smarter, not harder',
  LOGO_URL: 'https://yoursite.com/logo.png', // optional
  SYSTEM_PROMPT: 'You are {AI_NAME}, {AI_DESCRIPTION}. Be helpful and friendly!',
};
```

💡 **Need a logo URL?** Upload your image at [converter.aries.website](https://converter.aries.website/) and get an instant shareable URL!

### 3. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Doytechsolutionsinc/Aries-chatbot)

Or run locally:

```bash
npm install
npm run dev
```

## 🎨 Customization Examples

### Customer Support Bot
```typescript
AI_NAME: 'SupportBot'
AI_DESCRIPTION: 'a friendly customer support assistant'
TAGLINE: 'Help is here!'
SYSTEM_PROMPT: 'You are {AI_NAME}. Always be polite, professional, and focus on solving customer issues quickly.'
```

### Coding Assistant
```typescript
AI_NAME: 'CodeWizard'
AI_DESCRIPTION: 'an expert programming assistant'
TAGLINE: 'Debug faster. Code better.'
SYSTEM_PROMPT: 'You are {AI_NAME}, an expert programmer. Provide clean code examples and explain complex concepts simply.'
```

### Personal Tutor
```typescript
AI_NAME: 'TeachMe AI'
AI_DESCRIPTION: 'a patient and knowledgeable tutor'
TAGLINE: 'Learn at your own pace'
SYSTEM_PROMPT: 'You are {AI_NAME}, a patient tutor. Break down complex topics into simple steps. Always encourage learning.'
```

## 🖼️ Getting a Logo URL

1. Go to [converter.aries.website](https://converter.aries.website/)
2. Upload your logo image (PNG, JPG, GIF, WebP)(under 10 mb)
3. Copy the generated URL
4. Paste it in `LOGO_URL` in your `config.ts`

Done! Your custom logo will appear in your chatbot! 🎨

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Aries AI** - AI backend

## 📝 License

MIT License - Feel free to use for personal or commercial projects!

## 🤝 Support

- **Documentation:** [api.aries.website/docs](https://api.aries.website/docs)
- **Issues:** [GitHub Issues](https://github.com/Doytechsolutionsinc/Aries-chatbot/issues)
- **Email:** doytechsolutionsinc@gmail.com

---
## 🌐 Connect & Explore

[![Chat on WhatsApp](https://img.shields.io/badge/Chat_on_WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/14314522144)

[![Join WhatsApp Channel](https://img.shields.io/badge/Join_WhatsApp_Channel-128C7E?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029Vb05NOOLNSZzhqWQbG1Z)

[![View More Projects](https://img.shields.io/badge/View_More_Projects-000000?style=for-the-badge&logo=github&logoColor=white)](https://doy.aries.website/#projects)

---

Made with ❤️ by [Doy Tech Solutions Inc.](https://aries.website)
