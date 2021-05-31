Steps to build HMR:
1.	Create an empty folder and open it in VS Code
2.	Open terminal in it and follow the commands
3.	 npm init -y (to generate package.json file)
4.	Create a source folder (name your wish)
5.	Create an entry js file and sub js files
6.	Export sub js files and import them in entry js file.
7.	And we need to install webpack and webpack cli by using npm i webpack webpack-cli.
8.	Create webpack.config.js (this is to place to kept all configurations (like entry, output, modules and plugins)
9.	In entry set your entry file location
10.	In output filename (your wish) and path where your output needs to present
11.	And install webpack-dev-server to run hot modular npm i webpack-dev-server
12.	 npx webpack (to execute) output folder will be generates in that bundled file will be generated.
13.	Add .html file manually to know the changes live
14.	add devserver in config.js file add local host i.e port number to run in server instead of local browser and add hot: true to run live
15.	add if condition to run live in entry file
16.	add document.querySelector(“”).innerText=””; to make changes live
17.	npx webpack serve to run live continuously.
18.	Change the content and values check those in localhost: port number and open console in it to know the changes without refreshing the page.
