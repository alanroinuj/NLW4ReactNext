Settings

{
    "workbench.iconTheme": "material-icon-theme",
    "workbench.startupEditor": "newUntitledFile",
    "editor.minimap.enabled": false,
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "explorer.compactFolders": false,
    "workbench.colorTheme": "Dracula",

    "terminal.integrated.fontSize": 14,

    "editor.tabSize": 2,
    "editor.fontSize": 14, 
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,
    "explorer.confirmDelete": false,
    "editor.codeActionsOnSave":
{
    "source.fixAll.eslint": true,
    "source.fixAll": true,
    "estilint.enable": true,

},
    "eslint.packageManager": "yarn",

 "[javascript]": {
     "editor.codeActionsOnSave":{
         "source.fixAll.eslint": true,
     }
 },
 "[javascriptreact]":{
     "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true,
     }
 },
 "[typescript]": {
     "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true, 
     }
 },
 "[typescriptreact]": {
     "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true
     }
 },
"material-icon-theme.folders.associations":
{
    "infra": "app",
    "entities": "class",
    "schemas": "class",
    "typeorm": "database",
    "repositories": "mappings",
    "http": "container",
    "migrations": "tools",
    "modules": "components",
    "implementations": "core",
    "dtos": "typescript",
    "fakes": "mock"

},
    "material-icon-theme.files.associations":
{
    "ormconfig.json": "database",
    "tsconfig.json": "tune"

},
    "javascript.updateImportsOnFileMove.enabled": "always",
    "window.zoomLevel": 0,
}
