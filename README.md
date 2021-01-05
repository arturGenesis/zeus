![Next.js blogging template for Netlify](https://repository-images.githubusercontent.com/284910441/d8efc300-e2ae-11ea-9596-b01e3844e39d)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6f44d34-0570-4ca0-9d3d-cabdaa2b3afb/deploy-status)](https://app.netlify.com/sites/nextjs-netlify-blog-template/deploys)
[![MADE BY Next.js](https://img.shields.io/badge/MADE%20BY%20Next.js-000000.svg?style=flat&logo=Next.js&labelColor=000)](https://nextjs.org/)

Next.js blogging template for Netlify is a boilerplate for building blogs with only Netlify stacks.

There are some boilerplate or tutorials for the combination of Next.js and Netlify on GitHub. These resources have documentation and good tutorial to get started Next.js and Netlify quickly, but they are too simple to build blogs with standard features like tagging.

Next.js blogging template for Netlify has already implemented these standard features for building blogs with only using Next.js and Netlify stacks.

## Demo

Deploy on your environment by clicking here:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/wutali/nextjs-netlify-blog-template&stack=cms)

Or access the following demo site:

[Next.js blog template for Netlify](https://nextjs-netlify-blog-template.netlify.app/)

## Features

- **Tagging**: organizes content by tags
- **Author**: displays author names who write a post
- **Pagination**: limits the number of posts per page
- **CMS**: built with CMS to allow editors modifying content with the quickest way
- **SEO optimized**: built-in metadata like JSON-LD
- **Shortcode**: extends content writing with React component like WordPress shortcodes

## Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Netlify](https://www.netlify.com/)
- [MDX](https://mdxjs.com/)

## Getting started

To create your blog using the template, open your terminal, `cd` into the directory you'd like to create the app in,
and run the following command:

```
npx create-next-app your-blog --example "https://github.com/wutali/nextjs-netlify-blog-template"
```

After that, set up your project as following the Netlify blog:

[A Step-by-Step Guide: Deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

## Customization

This template is just a template and a boilerplate in which users can customize anything after the project was cloned and started.
The following instructions introduce common customization points like adding new metadata or applying a new design theme.

### Styling pages by a customized theme

All source codes related to the blog are under [components](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/components), [pages](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/pages), and
[layouts](https://github.com/wutali/nextjs-netlify-blog-template/tree/master/src/layouts) directory.
You can modify it freely if you want to apply your design theme.
All components use [styled-jsx](https://github.com/vercel/styled-jsx) and [css-modules](https://github.com/css-modules/css-modules) to define their styles, but you can choose any styling libraries for designing your theme.

The directory tree containing the blog source code are described below:

```
meta: yaml files defining metadata like authors or tags
public: images, favicons and other static assets
src
├── assets: other assets using inside of components
├── components: pieces of components consisting of pages
├── layouts: layout components for each post page
├── lib: project libraries like data fetching or pagination
└── pages: page components managing by Next.js
```

### Organizing content by categories

The category metadata that associates with content have the same relationship with the authors' one.
Then reference these implementations for adding new metadata:

- [public/admin/config.yml](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/config.yml#L51): author metadata definition for Netlify CMS
- [src/lib/authors.tsx](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/lib/authors.ts): fetches metadata and defines utility functions for components
- [meta/authors.yml](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/meta/authors.yml): author content managed by Netlify CMS
- [layouts/index.tsx](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/layouts/index.tsx): displays author content for each page

You understood they have four steps to add the category metadata on your project after you read the above source codes:

1. Define the category metadata on the above Netlify config file
2. Create an empty file named with `categories.yml` under [meta](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/meta/) directory
3. Create a new module for fetching category metadata
4. Display the category metadata on [layouts](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/layouts/index.tsx#L71) or other components you want

It is all you have to do. After that, you can access Netlify CMS and create new categories at any time.

### Locale settings for Netlify CMS

Modify [config.yml](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/config.yml) and
[index.html](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/index.html) under [public/admin](https://github.com/wutali/nextjs-netlify-blog-template/blob/master/public/admin/) directory
as following instructions:

[Netlify CMS - Configuration Options #Locale](https://www.netlifycms.org/docs/configuration-options/#locale)

## References

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/intro/)
- [Building a Markdown blog with Next 9.4 and Netlify](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/)
- [Hugo Theme - Codex](https://github.com/jakewies/hugo-theme-codex)
- [Next.js Starter Template for TypeScript](https://github.com/vercel/next-learn-starter/tree/master/typescript-final)
- [Building Blog with NextJS and Netlify CMS](https://dev.to/mefaba/building-blog-with-nextjs-and-netlify-cms-fom)
- [Unicons](https://github.com/Iconscout/unicons)

## License

MIT











## Example app using MongoDB

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Deploy your own

Once you have access to the environment variables you'll need, deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/vercel/next.js/tree/canary/examples/with-mongodb&env=MONGODB_URI,MONGODB_DB&envDescription=Required%20to%20connect%20the%20app%20with%20MongoDB)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-mongodb with-mongodb
# or
yarn create next-app --example with-mongodb with-mongodb
```

## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.
- `MONGODB_DB` - The name of the MongoDB database you want to use.

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/zeit/next.js/discussions).

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` and `MONGODB_DB` environment variables.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/vercel/next.js/tree/canary/examples/with-mongodb&env=MONGODB_URI,MONGODB_DB&envDescription=Required%20to%20connect%20the%20app%20with%20MongoDB)
