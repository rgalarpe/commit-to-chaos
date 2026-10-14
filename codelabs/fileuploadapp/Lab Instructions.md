::page{title="Create a File Upload and Handling App in Node and Express"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-CC0100EN-SkillsNetwork/images/IDSN-logo.png" width="200" alt="cognitiveclass.ai logo">

## Estimated Effort: 30 mins

In this lab you will create a file upload and handling application using Node.js and Express. In the modern web development landscape, handling file uploads is a crucial aspect of building robust applications. Whether it\'s images, documents, or other file types, allowing users to upload and manage files enhances the functionality and user experience of your web applications.

## Learning Objectives

After completeing this lab, you will know how to:

- Create an Express application with which you can upload files

- Provide an endpoint to access the uploaded files

- Access the uploaded files through the endpoints

::page{title="Create Node Application"}

1. Open a new terminal.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBM-CC0100EN-SkillsNetwork/images/new_terminal.jpg" style="width:90%;margin:1cm;border: 1px grey solid;display: block;margin-left: auto;margin-right: auto;">


2. Create a directory to add the code by running the following command.

```bash
mkdir fileuploadapp
```

3. Change to the newly created directory by running the following command.

```bash
cd fileuploadapp
```

4. Run the following command which initializes the directory as a Node application. This will keep track of the dependencies you will install for the application.

```bash
npm init
```

Please choose appropriate values when prompted else press enter to leave the default values. The package.json will be created in the current directory `fileuploadapp`.

>The lab environment is transient and the files and directories that you create will be deleted when you log out of the lab environment. But it is highly recommended that you follow these steps as good programming practice.

5. To provide API endpoints, you need to run a server. Express is Node.js web application framework that allows you to host services. Run the following command to install `express`.

```bash
npm install express multer
```

::page{title="Create the files for the application"}

6. Run the following command to create a new file named `fileuploadapp.js`.

```
touch fileuploadapp.js
```
7. Open the file `fileuploadapp.js` in the editor and paste the following code in it.

```js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Define the upload directory path
const directoryPath = 'uploads/';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, directoryPath); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage });

// Serve the HTML form for file upload
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return next(new Error('No file uploaded.'));
  }

  // Access the uploaded file information
  const uploadedFile = req.file;
  console.log('Uploaded file:', uploadedFile);

  fs.readdir(directoryPath, (err,files)=>{
    if (err) {
      return res.status(500).send('Error reading directory.');
    }
    strfilenames = `<a href='/'>Home</a><br/>`;

    files.forEach((file)=>{
      strfilenames = `${strfilenames} <a target='_blank' href='file/${file}'>${file}</a><br/>`;
    });
    res.send(strfilenames)
  });

});

// Serve uploaded files using express.static middleware
app.use('/file', express.static('uploads'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0211EN-SkillsNetwork/labs/v1/m4/images/fileupload.png" style="display: block;margin-left: .5cm;margin-right: .5cm;margin-bottom: 1cm; border-style:solid; border-width:1px; border-color:grey">

This application has a root endpoint which renders `index.html` and allows upload of file through the HTML. You will create `index.html` in the next step, and it will access the second `POST` endpoint to upload the file. Also, notice the error handler for non-existent routes.

8. Run the following command to create a new file named `index.html`.

```
touch index.html
```
9. Open the file `index.html` in the editor and paste the following content.

```html
<!DOCTYPE html>
<html lang="en">
<body>
  <h1>File Upload</h1>
  <form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file" />
    <input type="submit" value="Upload" />
  </form>
</body>
</html>

```

10. Create the `uploads` directory for the files to be uploaded.

```bash
mkdir uploads
```

::page{title="Run the application and access endpoints"}

1. Run the fileuploadapp.js from the terminal.

```bash
node fileuploadapp.js
```

This starts the express server on port `3000`.

2. Open the web application on port `3000` by click on the button below or through the `Launch Application` under the `SkillsNetwork Tools`, as shown in the image below.

::startApplication{port="3000" display="external" name="File Upload Application" route="/"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0211EN-SkillsNetwork/labs/v1/m3/images/openport3000.png" style="display: block;margin-left: .5cm;margin-right: .5cm;margin-bottom: 1cm; border-style:solid; border-width:1px; border-color:grey">

3. Browse and upload a file from your system.

4. After upload, the list of all files in the `upload` directory gets listed in addition to the most recent upload. You can click on the filename to open the file or download it depending on what type of file it is.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0211EN-SkillsNetwork/labs/v1/m4/images/upload_outcome.png" style="display: block;margin-left: .5cm;margin-right: .5cm;margin-bottom: 1cm; border-style:solid; border-width:1px; border-color:grey">

5. Stop the server by pressing `Ctrl+C`.

Congratulations! You have successfully created an application through which you can upload and access files on the server.

## Author(s)
[Lavanya T S](https://www.linkedin.com/in/lavanya-sunderarajan-199a445/)

<h3 align="center"> &#169; IBM Corporation. All rights reserved. <h3/>

<!--
## Changelog
| Date | Version | Changed by | Change Description |
|------|---------|-------|------|
| 2024-01-22 | 0.1 | Lavanya | Initial version |
| 2024-01-23 | 0.2 | Dave Hudnutt | QA edits |
-->
