<h1 align="center">[BSQGroup] Package Recommendation Tool</h1>
<p align="center" style="font-size: 1.2rem;">A recommendation tool for helping company formation customers pick the right package for their individual circumstances. This tool was built by Kieran White <kwhite@myself.com> for use by BSQ Group.</p>

## The problem

With company formation, there are several types of companies which are more suitable for certain businesses. Additionally, we have several packages available on our three company formation sites. This opens up a can of worms for new customers who have no idea of which package they need for their individual circumstances.

## This solution

This React application, for use by BSQ Group only, is a quiz utility that asks the customer questions in order to understand what they need from their company formation. These set of nine questions allows us to work out what is the most suitable package for them. We look at things such as a guarantor structure, a liabiliy structure and whether they are an international customer etc.

## Table of Contents

- [Project Structure](#structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Directus](#directus)

### Structure

The project is a simple React application using [Vite](https://vitejs.dev/) for front-end tooling and uses TypeScript and CSS Modules. It is composed of the following structure:

1. Dist - The compiled and built project.
2. Src - All source files.
    2.1. Assets - Asset folder containing the favicon.
    2.2. Components - All React components.
    2.3. Interfaces - All TypeScript interfaces.
    2.4. Services - Functions to pull data from Directus.
    2.5. Styles - Main styles and mixins and variables.

### Installation

Once the repository has been cloned, you must install the dependencies using the following:

```
yarn
```

This will install all the dependencies of the project to the `node_modules` folder.

### Scripts

The following scripts are defined.

#### Dev

Running `yarn run dev` will spin up a local server for the React application using Vite. This will allow you to navigate to `http://localhost:3000` by default to see the application.

#### Build 

Running `yarn run build` will compile and build the React application using vite. This will generate files in the `dist` folder for you to deploy to your chosen host.

### Directus

The project uses a [Directus](https://recommendation.directus.1stformations.co.uk/) instance to store the data for all Packages, Steps, Questions, Answers and Recommendations. This data is retrieved using the `services` folder functions and the `useEffect` hook.