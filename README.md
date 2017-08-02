# Configuring a .NET Core Web Application
Guide to configuring a .NET Core Web Application that uses SASS and ReactJS, including configuration files. For more detailed instructions, see the wiki. Quick reference instructions are below.

## Quick Start
1. Create a new .NET Core Web Application.
2. Get rid of excess default code and files by following the [Setting Up a New Project](https://github.com/jyee117/dotnet-core-web-app-configuration/wiki/1%29-Setting-Up-a-New-Project) wiki page.
3. Copy the contents of this repository into your project's root.
4. Initialize npm: Run `npm install' from your project's root directory.
5. Build assets with Webpack (see below).
6. Configure _Layout.cshtml to use Bootstrap. The Bootswatch Flatly theme is set up by default. See the steps on the [Add Bootstrap Framework](https://github.com/jyee117/dotnet-core-web-app-configuration/wiki/4a%29-Add-Bootstrap-Framework#configuring-a-bootswatch-theme) page.

## Running Webpack
1. Edit files in _/src_.
2. Build the files with Webpack:  
   - Normal build: `npm run build`
   - Watch build: `npm run build-watch`
   - Production build: `npm run build-production`

## Reference Links
[ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/)  
[npm Package Search](https://npmsearch.com/)  
[Webpack](https://webpack.js.org/configuration/)  
[Bootstrap](http://getbootstrap.com/getting-started/)  
[Bootswatch](https://bootswatch.com/)  
[SASS](http://sass-lang.com/guide)  
[React](https://facebook.github.io/react/docs/installation.html)
