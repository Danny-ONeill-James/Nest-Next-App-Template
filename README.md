# Nest Next App Template

A NestJS and NextJS monorepo project template designed to kickstart new applications.

## Introduction

The Nest Next App Template is a monorepo project that combines the power of [NestJS](https://nestjs.com/) on the server-side with the flexibility and performance of [Next.js](https://nextjs.org/) on the client-side. This template provides a solid foundation for building modern web applications with a strong focus on maintainability and scalability.

## Getting Started

To set up your development environment, follow these simple steps:

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (v1 or v2)

### Installation

Clone the repository and install the project dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/nest-next-app-template.git

# Change directory to the project folder
cd Nest-Next-App-Template

# Install dependencies
yarn install
```

### Usage

To start the development server, run the following command:

```bash
# Starts the NestJS and NextJS development server
yarn dev
```

This will launch both the NestJS backend and the Next.js frontend, making your application accessible at http://localhost:3000 and the API avaialble at http://localhost:4000

## API Testing with Postman

We have provided both a Postman collection and an associated environment to facilitate testing of the API endpoints. You can find these files in the [`documentation/postman-collections`](./documentation/postman-collections/) directory:

- **Collection**: `Auth.postman_collection.json`
- **Environment**: `Nest-Next-App-Template Environment.postman_environment.json`

To start testing, simply import the respective `.json` files into Postman.

### Features

- **Full-stack TypeScript Development**: Enjoy the benefits of TypeScript both on the server and client sides for enhanced type safety and productivity.
- **Monorepo Architecture**: Keep your code organized and promote code sharing within the project thanks to the monorepo structure.
- **Easy Development Setup**: With Yarn, setting up the development environment is a breeze, allowing you to focus on coding instead of configuration.

### Contributing

Contributions are welcome!

## Acknowledgments

Special thanks to the following libraries and frameworks:

- [NestJS](https://nestjs.com)
- [Next.js](https://nextjs.org)
