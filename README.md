# Ignite Challenge 4 - Upload of Images
This is my resolution of the Challenge 4 - Upload of images. Had to implement some pieces of code into the application. I filled the the code to request information about the images that is stored in FaunaDB and also the image itself, that is stored in the ImgBB. Also, had to implement:

- Infinite Queries and Mutations with React Query.
- Send data and validate with React Hook Form.
- Use Chakra UI to show Modal and use Toast

## Technologies used
* Javascript 
* Typescript
* JSX
* Chakra
* Next
* Yarn
* React query
* React Form
* FaunaDB and ImgBB

# ImgBB

ImgBB is used as a date base to save the images. It is free and easy to use. Have to to 3 steps to use it in the application:
* Must create an account
* Create a API key and save it
* Cope the key and past at `.env.local` file as follow:
	NEXT_PUBLIC_IMGBB_API_KEY=COPIED_KEY_VALUE_HERE

# FaunaDB

FaunaDB is used to save the details of the image. The url, title and description. What need to do, is to create a data base with desired name and make a collection called `images`.
With the data base created, need to cope the API key value of the data base and past at `.env.local` as follow:
	FAUNA_API_KEY=COPIED_KEY_VALUE_HERE

## What I had to do?

The files that I had to change were:

* src/pages/index.ts;
* src/components/Form/FormAddImage.tsx;
* src/components/Modal/ViewImage.tsx;
* src/components/CardList.tsx;

# pages/index.tsx

This file is responsible to render all the aplication and also is where the logic to fetch the images is. Used useInfiniteQuery and its params. Also the isLoading to show loading page and the isError to show the error page. If success, the data will be displayed using the CardList component. The useInfineteQuery was used to fetch more data if have more, without losing the one that is already fetched.

# components/CardList.tsx

This file is responsible to render a Grid of 3 columns and a Card component to each Image. Had to construct the grid using SimpleGrid component from Chakra UI and iterate over all images, passing the needed properties to Card component of each image.

# components/Modal/ViewImage.tsx
This file is responsible to render the modal of the image with a link under, when you click any image.

# components/Form/FormAddImage.tsx

This is an important file. It render the form to add a new image. It is where we validade and get the inputs needed to save an images with details in the data base.

# Conclusion

Was not a easy task but had some fun with it. Could learn more about Chakra and react query, that I was less used to use. React Form part was easy to understand and change.
Programming is this: Never stop learning and training. It is like going to the Gym. To maintain the body, need to train regularly.

Ignite bootcamp - React/Next course. Teacher: Diego Fernandes.