Requirements:

	1. Visual Studio Code
	   # https://code.visualstudio.com/download

	2. NodeJS
	   # https://nodejs.org/en/download/

	3. .NET Core 2.1 SDK 
	   # https://dotnet.microsoft.com/download/dotnet-core/2.1

	4. AngularCLI
	   from terminal, run the following command: 'npm install -g @angular/cli'

Starting the app:
	
	1. Download code from GitHub and extract to a directory "Sentiment"
	   # https://github.com/sadovetzki/sentiment

	2. Open terminal and navigate to directory you just created ("Sentiment")

	3. Open this directory in VS code by running the command "code ."

	4. Open terminal view (ctrl + ~) in VS Code and nagivate to SentimentApp-SPA folder 'cd .\SentimentApp-SPA\'

	5*. Install node modules by running the command 'npm install'

	6. Start kestrel server by running the command 'dotnet run'

	7. Open new terminal (ctrl + shift + ~) and navigate to API folder 'cd .\SentimentApp.API\'

	8. Start SPA application from terminal .\SentimentApp-SPA\ by running the command 'ng serve'

	9. Open your browser of choice and navigate to 'localhost:4200' 


* If the error 'npm is not recognized as cmdlet' is encountered, you need to set default command prompt for VS code to be cmd.exe:
 > ctrl + shift + p
 > Type "Select Default Shell" + Enter
 > Select 'Command Prompt ...cmd.exe'
 > Restart VS Code
