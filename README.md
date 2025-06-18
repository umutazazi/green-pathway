# 🌱 Green Pathway

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-4+-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)

> A comprehensive software platform designed to facilitate the tracking, analysis, and reduction of carbon footprints in the fight against climate change.

## 🌍 About

In the face of escalating climate change, there is an urgent need for innovative solutions to empower individuals and businesses in their efforts to mitigate their environmental impact. **Green Pathway** is a comprehensive software platform designed to address this imperative by facilitating the tracking, analysis, and reduction of carbon footprints.
## Screenshots
![Ekran görüntüsü 2025-06-18 180054](https://github.com/user-attachments/assets/04dc32da-dfa6-4015-8085-bec2c73de05e)
![Ekran görüntüsü 2025-06-18 180120](https://github.com/user-attachments/assets/4eabccaf-b319-4f67-8889-c1fa9aa62117)
![Ekran görüntüsü 2025-06-18 180137](https://github.com/user-attachments/assets/5917fb59-eaff-4f12-99e1-52bbacac3bd1)



## ✨ Features

### 📊 Carbon Footprint Tracking and Monitoring
- **Personal and Corporate Footprints**: Track carbon footprints across various domains including:
  - Residential energy usage
  - Workplace operations  
  - Transportation habits
- **Intuitive Tools**: User-friendly data input and visualization tools to gain insights into environmental impact

### 📈 Data Analysis and Visualization
- **Progress Tracking**: Monitor your environmental progress over time
- **Trend Analysis**: Identify patterns and trends in your carbon footprint
- **Interactive Charts**: Comprehensive data visualization with multiple chart types
- **Benchmarking**: Compare your progress against sustainability goals and industry standards

### 🎯 Sustainability Goals
- Set and track personalized carbon reduction targets
- Receive recommendations for improvement
- Monitor achievements and milestones

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Charts**: Custom chart components for data visualization
- **State Management**: Redux

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/umutazazi/green-pathway.git
   ```

2. **Navigate to project directory**
   ```bash
   cd green-pathway
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.

5. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── about/             # About page
│   ├── calculate/         # Carbon footprint calculator
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── BarChartPlot.js   # Bar chart visualization
│   ├── CalculateCard.tsx # Calculator card component
│   ├── Charts.js         # Chart utilities
│   ├── NavBar.js         # Navigation component
│   ├── PieChartPlot.js   # Pie chart visualization
│   └── RadarChartPlot.js # Radar chart visualization
├── lib/                   # Utility libraries
│   └── prismadb.ts       # Prisma database client
├── prisma/               # Database schema and migrations
├── redux/                # State management
└── public/               # Static assets
```

## 🎯 Usage

1. **Dashboard**: View your carbon footprint overview and key metrics
2. **Calculate**: Input your energy usage, transportation, and other activities
3. **Analyze**: Explore detailed charts and trends of your environmental impact
4. **Track Progress**: Monitor your reduction efforts over time
5. **Set Goals**: Define and work towards sustainability targets

## 📊 Chart Types

The platform includes various visualization components:
- **Bar Charts**: Compare different categories of emissions
- **Pie Charts**: Show proportional breakdown of your carbon footprint
- **Radar Charts**: Multi-dimensional analysis of sustainability metrics

## 🤝 Contributing

We welcome contributions to Green Pathway! Please feel free to submit issues, feature requests, or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🌟 Vision

Green Pathway represents a pioneering software solution that harnesses the power of technology to address the pressing challenges of climate change and sustainability. By empowering individuals and businesses to track, analyze, and reduce their carbon footprints, the platform lays the groundwork for a more resilient and environmentally conscious society.

Through collective action and innovation, Green Pathway charts a path towards a sustainable future for generations to come.


**Made with 💚 for a sustainable future**
