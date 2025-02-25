# code-challenge-shop

This is a **Next.js 15** project designed for a coding challenge.

---

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (v8 or later) or [yarn](https://yarnpkg.com/) (v1.22 or later)

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/BossNMT/code-challenge-shop.git
cd code-challenge-shop
```

### Install Dependencies

Using **Yarn**:
```bash
yarn install
```

Or using **npm**:
```bash
npm install
```

---

## Running the Project

### Development Mode

Start the development server:
```bash
yarn dev
```

Or using npm:
```bash
npm run dev
```

The app should now be running at [http://localhost:3000](http://localhost:3000).

### Production Build

Build the project for production:
```bash
yarn build
```
Or using npm:
```bash
npm run build
```

Start the production server:
```bash
yarn start
```
Or using npm:
```bash
npm start
```

---

## Project Structure

```
code-challenge-shop/
├── public/         # Static assets
├── src/
│   ├── app/       # Application-related logic
│   ├── assets/    # Images, fonts, and static assets
│   ├── components/ # Reusable UI components
│   ├── config/    # Configuration files
│   ├── constants/ # Constant values
│   ├── helpers/   # Helper functions
│   ├── hooks/     # Custom React hooks
│   ├── layouts/   # Layout components
│   ├── libs/      # External libraries and integrations
│   ├── providers/ # Context providers
│   ├── services/  # API and business logic services
│   ├── store/     # Global state management
│   ├── types/     # TypeScript types
│   ├── utils/     # Utility functions
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

---

## Code Overview

This project consists of a backend (BE) that crawls data from [www.ikea.com](https://www.ikea.com) and provides an API for the frontend (FE) to retrieve the necessary data. The frontend then processes this data to render images, identify product positions, and display their prices.

Additionally, advertisements are displayed at specific intervals following the Fibonacci sequence.

### Workflow
1. **Data Crawling:** The backend fetches product data from the IKEA website.
2. **API Endpoint:** The backend exposes an API that the frontend can call to retrieve product details.
3. **Rendering:** The frontend processes the received data and dynamically displays product images, their positions, and pricing.
4. **Advertisements:** Advertisements are injected into the product list following the Fibonacci sequence, ensuring strategic ad placements.

---

## Environment Variables

Create a `.env.local` file in the root directory and configure the required environment variables:

```
NEXT_PUBLIC_API_HOST=https://api.example.com
NEXT_PUBLIC_API_VERSION=v1
NEXT_PUBLIC_HOST=https://example.com
```

Ensure to replace the values with your actual credentials.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

