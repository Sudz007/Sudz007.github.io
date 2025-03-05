# Sudz007.github.io

Step by step instructions to creating and accessing repository and using ssh and keys through cmd

1. Create new repository
2. Set the repository link to ssh with the green <>code button.
3. Copy this and change information as needed:
   
      echo "# SnowflakeWorld" >> README.md
      git init
      git add README.md
      git commit -m "first commit"
      git branch -M main
      git remote add origin git@github.com:Sudz007/SnowflakeWorld.git
      git push -u origin main

5. Create SSH key. (Already created for this repo. Probably look up a guide for another.)

6. Add new files to update the repo by using the 'git add --all' command.
7. 'git commit --all' to commit the changes to the repo.
8. Add and change files in the Repository file:
      C:\Path>git commit --all -m "Adding index.html" (This command will add a comment 'm' means message "Adding index.html")

9. To check the satus of what is there already and what is new, use the command 'git status.'
10. This shit, if its not pushing manually type path:

   C:\Users\ladub\OneDrive\Desktop\NEWPOrt\Sudz007.github.io>git push
   Enter passphrase for key '/c/Users/ladub/.ssh/id_ed25519':
   Enumerating objects: 4, done.
   Counting objects: 100% (4/4), done.
   Delta compression using up to 12 threads
   Compressing objects: 100% (2/2), done.
   Writing objects: 100% (3/3), 287 bytes | 287.00 KiB/s, done.
   Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
   To github.com:Sudz007/Sudz007.github.io.git
   905fbd1..bf12cf4  main -> main

   C:\Users\ladub\OneDrive\Desktop\NEWPOrt\Sudz007.github.io>
