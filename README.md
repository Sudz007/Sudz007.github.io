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
