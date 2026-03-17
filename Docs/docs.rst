:architecture:

:Web Server:
     ↓
:WebOS Core:
     ↓
:Desktop UI:
     ↓
:Apps (modules):

:webOS1:
 ├── :index.html:
 ├── .. core:/
 │    ├── kernel.js
 │    ├── system.js
 │
 ├── .. ui:
 │    ├── desktop.js
 │    ├── windowManager.js
 │
 ├── :apps:/
 │    ├── terminal/
 │    ├── files/
 │    ├── browser/
 │
 ├──.. assets:/
 │    ├── icons/
 │
 └──.. lconfig:/
      ├── system.json

:HTML:
:CSS:
:JavaScript:

:createWindow(app)::
:focusWindow():
:closeWindow():
:dragWindow():

.. apps:/
   chat/
      app.json
      index.html
      script.js

      :localStorage:
:IndexedDB:
:cloud:
.. apps:
.. documents:
.. system:

.. install app:
.. launch app:
.. update app:
:remove app:

:webOS.install(app):
:webOS.launch(app):
:webOS.remove(app):

:User:
 ↓
:Browser OS:
 ↓
:AI agents:
 ↓
:Web4 services:
 ↓
:Blockchain / decentralized network:

.. camera access:
.. filesystem access:
.. network access:

:iframe sandbox:
:WebAssembly runtime:

:process:
:memory:
:events:

.. webos: ->install ->chat.app
:webos update:
:webos remove:

.. AI OS (Web4):

:Kernel:
 ├─ AI Agent Manager
 ├─ Memory Layer
 ├─ Event Bus

:Runtime:
 ├─ App Sandbox
 ├─ WebAssembly Engine

:System Apps:
 ├─ Terminal
 ├─ File Manager
 ├─ AI Assistant

:Network:
 ├─ Blockchain Identity
 ├─ Web4 Protocol
 
