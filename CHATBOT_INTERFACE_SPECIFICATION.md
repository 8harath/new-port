# Arete Chatbot Interface - Complete Visual Specification

## 📋 **Overview**
This document provides a comprehensive description of the Arete AI Assistant chatbot interface. Following this specification exactly will recreate the identical visual appearance, animations, and user interactions.

---

## 🎨 **Color Palette & Theme**

### **Primary Colors**
- **Background**: `#FFFAEB` (Amber-50) - Warm cream background
- **Surface**: `#FFF0C2` (Light amber surface)
- **Primary Border**: `#000000` (Black - 2px thick borders)
- **Text**: `#111827` (Gray-900) - Dark gray text

### **Accent Colors**
- **Amber-50**: `#FFFAEB` - Main background
- **Amber-100**: `#FEF3C7` - Footer background
- **Amber-200**: `#FDE68A` - User message background
- **Amber-300**: `#FCD34D` - User avatar background, hover states
- **Amber-400**: `#F59E0B` - Active states
- **Amber-500**: `#D97706` - Typing indicator dots
- **Amber-600**: `#CA8A04` - Input focus border

### **Additional Colors**
- **Gray-100**: `#F3F4F6` - Assistant message background
- **Gray-200**: `#E5E7EB` - Button default background, bot avatar
- **Gray-400**: `#9CA3AF` - Secondary borders
- **Gray-600**: `#4B5563` - Secondary text
- **Gray-700**: `#374151` - Description text
- **Gray-800**: `#1F2937` - Primary borders and text
- **Red-600**: `#DC2626` - Brain icon color
- **White**: `#FFFFFF` - Input focus background

---

## 🏗️ **Layout Structure**

### **Section Container**
```css
min-height: 100vh
padding: 2rem 0
max-width: 48rem (768px)
margin: 0 auto
padding-x: 1rem
```

### **Header Section**
- **Position**: Center-aligned
- **Margin Bottom**: 2rem
- **Title Container**: 
  - Background: `#FEF3C7` (amber-100)
  - Border: 2px solid `#CA8A04` (amber-600)
  - Padding: 1.5rem 1rem
  - Display: inline-block
  - Margin Bottom: 1rem

### **Title Styling**
- **Font Size**: 1.875rem (30px)
- **Font Weight**: Bold
- **Display**: Flex with center alignment
- **Gap**: 0.75rem between icon and text
- **Icon**: Brain icon (Lucide React)
  - Size: 1.75rem (28px)
  - Color: `#DC2626` (red-600)

### **Description Text**
- **Color**: `#374151` (gray-700)
- **Max Width**: 36rem (576px)
- **Margin**: Auto-centered
- **Text**: "Ask me about Bharath's projects, skills, research, or experience."

---

## 🔘 **Quick Questions Section**

### **Container**
- **Margin Bottom**: 1.5rem
- **Grid Layout**: 
  - Mobile: 1 column
  - Desktop: 2 columns (768px+)
- **Gap**: 0.75rem

### **Quick Question Buttons**
- **Class**: `.retro-button`
- **Text Alignment**: Left
- **Padding**: 0.75rem
- **Font Size**: 0.875rem (14px)
- **Transition**: `all 300ms`
- **Hover Effect**: `scale(1.05)` transform
- **Background**: `#E5E7EB` (gray-200) default
- **Hover Background**: `#FCD34D` (amber-300)
- **Border**: 2px solid `#1F2937` (gray-800)
- **Box Shadow**: `4px 4px 0px rgba(0, 0, 0, 0.3)`

### **Button Text Content**
1. "Tell me about Bharath's AI/ML projects"
2. "What technologies does Bharath work with?"
3. "What are Bharath's research interests?"
4. "How can I contact Bharath?"

---

## 💬 **Chat Container**

### **Main Chat Card**
- **Class**: `.card`
- **Background**: `#F3F4F6` (gray-100)
- **Border**: 2px solid `#1F2937` (gray-800)
- **Padding**: 1rem
- **Box Shadow**: Default card shadow

### **Messages Area**
- **Height**: 20rem (320px)
- **Overflow**: Vertical scroll
- **Margin Bottom**: 1rem
- **Padding**: 1rem
- **Background**: `#FFFAEB` (amber-50)
- **Border**: 2px solid `#9CA3AF` (gray-400)
- **Scrollbar**: Custom styled (`.custom-scrollbar`)

### **Custom Scrollbar Styling**
```css
/* Webkit browsers */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #FFFAEB;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #FF8205;
  border-radius: 4px;
  border: 2px solid #FFFAEB;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #FA520F;
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #FF8205 #FFFAEB;
}
```

---

## 👤 **Message Components**

### **Message Container**
- **Display**: Flex with 0.75rem gap
- **Margin Bottom**: 1rem between messages
- **User Messages**: `flex-row-reverse` (right-aligned)
- **Assistant Messages**: `flex-row` (left-aligned)

### **Avatar Styling**
- **Size**: 2rem × 2rem (32px × 32px)
- **Border**: 2px solid `#1F2937` (gray-800)
- **Border Radius**: 50% (fully rounded)
- **Display**: Flex with center alignment
- **Flex Shrink**: 0 (maintains size)
- **Transition**: `transform` on hover
- **Hover Effect**: `scale(1.1)`

### **User Avatar**
- **Background**: `#FCD34D` (amber-300)
- **Text Color**: `#1F2937` (gray-800)
- **Icon**: User icon (Lucide React) - 1rem size

### **Assistant Avatar**
- **Background**: `#E5E7EB` (gray-200)
- **Text Color**: `#1F2937` (gray-800)
- **Icon**: Bot icon (Lucide React) - 1rem size

### **Message Bubble**
- **Max Width**: 
  - Small screens: 18rem (288px)
  - Large screens: 24rem (384px)
- **Border**: 2px solid `#1F2937` (gray-800)
- **Padding**: 0.75rem horizontal, 0.5rem vertical
- **Transition**: `all 300ms`
- **Hover Effect**: `box-shadow` enhancement
- **Box Shadow**: `2px 2px 0px rgba(0, 0, 0, 0.3)`

### **User Message Bubble**
- **Background**: `#FDE68A` (amber-200)
- **Text Color**: `#111827` (gray-900)

### **Assistant Message Bubble**
- **Background**: `#F3F4F6` (gray-100)
- **Text Color**: `#111827` (gray-900)

### **Message Text**
- **Font Size**: 0.875rem (14px)
- **Font Family**: Mono (font-mono class)

---

## ⌨️ **Typing Indicator**

### **Container**
- **Display**: Flex with 0.75rem gap
- **Same structure as message container**

### **Typing Avatar**
- **Same as assistant avatar**
- **Animation**: `animate-pulse`

### **Typing Bubble**
- **Same styling as assistant message bubble**
- **Contains three animated dots**

### **Typing Dots Animation**
```css
.typing-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #D97706; /* amber-500 */
  border-radius: 50%;
  animation: bounce 1s infinite;
}

/* Staggered animation delays */
.dot-1 { animation-delay: 0s; }
.dot-2 { animation-delay: 0.1s; }
.dot-3 { animation-delay: 0.2s; }
```

---

## 📝 **Input Section**

### **Input Container**
- **Border Top**: 2px solid `#9CA3AF` (gray-400)
- **Padding Top**: 1rem
- **Display**: Flex with 0.75rem gap

### **Text Input**
- **Flex**: 1 (takes remaining space)
- **Padding**: 0.75rem horizontal, 0.5rem vertical
- **Border**: 2px solid `#1F2937` (gray-800)
- **Background**: `#FFFAEB` (amber-50) default
- **Font Family**: Mono
- **Font Size**: 0.875rem (14px)
- **Text Color**: `#111827` (gray-900)
- **Placeholder**: "Ask me about Bharath..."
- **Placeholder Color**: `#4B5563` (gray-600)
- **Box Shadow**: `inset 2px 2px 4px rgba(0, 0, 0, 0.1)`
- **Transition**: `all 300ms`
- **Outline**: None

### **Input Focus State**
- **Background**: `#FFFFFF` (white)
- **Border Color**: `#CA8A04` (amber-600)

### **Input Disabled State**
- **Opacity**: 0.5
- **Cursor**: not-allowed

### **Send Button**
- **Class**: `.retro-button`
- **Padding**: 0.5rem horizontal, 1rem vertical
- **Display**: Flex with center alignment
- **Gap**: 0.5rem between icon and text
- **Font Size**: 0.875rem (14px)
- **Icon**: Send icon (Lucide React) - 1rem size

### **Send Button Disabled State**
- **Opacity**: 0.5
- **Cursor**: not-allowed

---

## 🔳 **Footer Section**

### **Container**
- **Margin Top**: 1.5rem
- **Text Alignment**: Center

### **Footer Text**
- **Font Size**: 0.75rem (12px)
- **Color**: `#4B5563` (gray-600)
- **Font Family**: Mono
- **Background**: `#FEF3C7` (amber-100)
- **Border**: 1px solid `#9CA3AF` (gray-400)
- **Padding**: 0.75rem horizontal, 0.25rem vertical
- **Display**: inline-block
- **Content**: "🤖 Arete AI Assistant • Powered by Bharath's knowledge base"

---

## 🎭 **Animations & Transitions**

### **Default Transitions**
- **Duration**: 300ms
- **Easing**: ease-in-out
- **Properties**: all, transform, opacity, background-color, border-color

### **Hover Animations**
- **Avatar Scale**: `transform: scale(1.1)`
- **Button Hover**: `transform: translateY(-2px) translateX(-2px)`
- **Quick Questions**: `transform: scale(1.05)`

### **Typing Animation**
```css
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}
```

### **Pulse Animation**
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

### **Smooth Scrolling**
- **Behavior**: smooth
- **Applied to**: Messages scroll-to-bottom

---

## 📱 **Responsive Behavior**

### **Mobile (< 768px)**
- **Quick Questions**: Single column grid
- **Message Max Width**: 18rem (288px)
- **Container Padding**: 1rem
- **Touch-friendly tap targets**: Minimum 44px

### **Desktop (≥ 768px)**
- **Quick Questions**: Two column grid
- **Message Max Width**: 24rem (384px)
- **Container Padding**: Default
- **Hover effects**: Enabled

---

## 🎯 **Interactive States**

### **Button States**
1. **Default**: Gray-200 background
2. **Hover**: Amber-300 background + transform
3. **Active**: Amber-400 background + depressed effect
4. **Disabled**: 50% opacity + disabled cursor

### **Input States**
1. **Default**: Amber-50 background
2. **Focus**: White background + amber-600 border
3. **Disabled**: 50% opacity

### **Loading States**
1. **Typing Indicator**: Visible during AI response
2. **Send Button**: Disabled during typing
3. **Input Field**: Disabled during typing

---

## 🔤 **Typography**

### **Font Families**
- **Primary**: Arial, Helvetica, sans-serif
- **Monospace**: font-mono (for input, messages, footer)

### **Font Sizes**
- **Title**: 1.875rem (30px)
- **Description**: 1rem (16px)
- **Buttons**: 0.875rem (14px)
- **Messages**: 0.875rem (14px)
- **Footer**: 0.75rem (12px)

### **Font Weights**
- **Title**: Bold
- **Regular Text**: Normal
- **Emphasis**: Bold (for labels)

---

## 📐 **Spacing System**

### **Margins**
- **Section**: 2rem bottom
- **Header**: 2rem bottom
- **Quick Questions**: 1.5rem bottom
- **Messages**: 1rem between
- **Input Section**: 1rem top padding
- **Footer**: 1.5rem top

### **Padding**
- **Container**: 1rem horizontal
- **Card**: 1rem all sides
- **Messages Area**: 1rem all sides
- **Input**: 0.75rem horizontal, 0.5rem vertical
- **Buttons**: 0.75rem (quick questions), 1rem vertical for send

### **Gaps**
- **Grid**: 0.75rem
- **Flex Elements**: 0.75rem (messages), 0.5rem (button content)

---

## 🎨 **Visual Effects**

### **Box Shadows**
- **Retro Buttons**: `4px 4px 0px rgba(0, 0, 0, 0.3)`
- **Message Bubbles**: `2px 2px 0px rgba(0, 0, 0, 0.3)`
- **Input Inset**: `inset 2px 2px 4px rgba(0, 0, 0, 0.1)`

### **Border Radius**
- **Avatars**: 50% (full circle)
- **Other Elements**: 0 (sharp corners for retro aesthetic)

### **Transforms**
- **Hover Scale**: 1.05 - 1.1
- **Button Hover**: translateY(-2px) translateX(-2px)
- **Button Active**: translateY(1px) translateX(1px)

---

This specification provides all necessary details to recreate the exact appearance and behavior of the Arete chatbot interface. The retro aesthetic is achieved through sharp borders, specific color combinations, mono fonts, and distinctive box shadows.
