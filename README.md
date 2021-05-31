# hot-modular
Steps to build HRM:
    Create an empty folder and open it in VS Code  
    Open terminal in it and follow the commands
    npm init -y (to generate package.json file)
	Create a source folder (name your wish)
	Create an entry js file and sub js files
	Export sub js files and import them in entry js file.
	And we need to install webpack and webpack cli by using npm i webpack webpack-cli.
	Create webpack.config.js (this is to place to kept all configurations (like entry, output, modules and plugins)
	In entry set your entry file location
	In output filename (your wish) and path where your output needs to present
	And install webpack-dev-server to run hot modular npm i webpack-dev-server
	npx webpack (to execute) output folder will be generates in that bundled file will be generated.
	Add .html file manually to know the changes live
	add devserver in config.js file add local host i.e port number to run in server instead of local browser and add hot: true to run live
	add if condition to run live in entry file
	add document.querySelector(“”).innerText=””; to make changes live
	npx webpack serve to run live continuously.
  Change the content and values check those in localhost: port number and open console in it to know the changes without refreshing the page
