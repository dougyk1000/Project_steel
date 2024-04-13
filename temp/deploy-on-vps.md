## Deploy on VPS or PC.
- You need to Install git, ffmpeg, curl, node js, yarn with pm2: 
   1. Install git ffmpeg curl: 
      ``` 
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ``` 
   2. Install nodejs:  
      ```   
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```
  
   3. Install yarn:
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```  
  
   4. Install pm2:
      ```
      sudo yarn global add pm2
      ```
  
   5. Clone Repo and Install required packages:
      ```
      git clone https://github.com/SuhailTechInfo/Suhail-Md
      cd Suhail-Md
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV: 
      ```
      touch config.env
      nano config.env
      ```
      Copy and Paste the lines below:

      ```
      OWNER_NUMBER="923184474176"
      SESSION_ID = "SESSION_85_23_59_01_kjgfgfclhj"
      THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
      OWNER_NAME = "𝐷𝛩𝑈𝐺𝑌_𝛫1000"
      PREFIX = .
      WARN_COUNT = 3
      DISABLE_PM = "false"
      THEME= "𝐷𝛩𝑈𝐺𝑌_𝛫1000"
      MODE = "public"
      ANTILINK_VALUES = "https://,chat.whatsapp.com"
      
      ```
     PRESS Ctrl + o and Ctrl + x to save and exit:

   7. Start and Stop bot:
 
      To start bot: ``` npm start ```,
      To stop bot: ``` npm stop ```

 
<h2 align="center">  NOTICE </h2>
---
*PROJECT STEEL BOT* is not made by *`WhatsApp Inc.`* Sometimes misusing the bot might *`ban`* your *`WhatsApp account!`*
- *In that case, I'm not responsible for banning your account.*
- *Use *PROJECT STEEL BOT* at your own risk by keeping this warning in mind.*
 
